import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MedicineDto } from './medicine.dto';
import { MedicineService } from './medicine.service';
import toStream = require('buffer-to-stream');
import { v2 } from 'cloudinary';

@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Get()
  getAllMedicine() {
    return this.medicineService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.medicineService.findOne(id);
  }

  @Post('')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file, @Body() value) {
    if (file) {
      let result: MedicineDto;
      const streamUpload = (medicineService) => {
        return new Promise((resolve, reject) => {
          const stream = v2.uploader.upload_stream((error, result) => {
            if (result) {
              const { secure_url, public_id } = result;
              return resolve(
                medicineService.save({
                  ...value,
                  image: secure_url,
                  nameImage: public_id,
                }),
              );
            } else {
              return reject(error);
            }
          });
          toStream(file?.buffer).pipe(stream);
        }).then((res: MedicineDto) => {
          result = res;
        });
      };
      async function upload(medicineService) {
        await streamUpload(medicineService);
      }
      await upload(this.medicineService);
      return result;
    } else
      return this.medicineService.save({
        ...value,
        // note: JSON.stringify(test),
      });
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async updateUserById(
    @UploadedFile() file,
    @Param('id') id: string,
    @Body() medicine,
  ): Promise<{ result: string }> {
    if (file) {
      let result: any;
      const streamUpload = (medicineService) => {
        return new Promise((resolve, reject) => {
          const stream = v2.uploader.upload_stream((error, result) => {
            if (result) {
              const { secure_url, public_id } = result;
              return resolve(
                medicineService.update(id, {
                  ...medicine,
                  image: secure_url,
                  nameImage: public_id,
                }),
              );
            } else {
              return reject(error);
            }
          });
          toStream(file?.buffer).pipe(stream);
        }).then((res: MedicineDto) => {
          result = res;
        });
      };
      async function upload(medicineService) {
        await streamUpload(medicineService);
      }
      await upload(this.medicineService);
      return result;
    } else return this.medicineService.update(id, medicine);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.medicineService.deleteById(id);
  }
}
