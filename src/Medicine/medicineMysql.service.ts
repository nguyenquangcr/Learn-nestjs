import { plainToInstance } from 'class-transformer';
import { v2 } from 'cloudinary';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Repository } from 'typeorm';
import { MedicineDto } from './medicine.dto';

export class MedicineMysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {}

  async findAll() {
    const listMedicine = await this.repo.find({});
    return plainToInstance(MedicineDto, listMedicine, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: string): Promise<any> {
    const foundMedicine: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (foundMedicine === null) {
      return null;
    }
    return plainToInstance(MedicineDto, foundMedicine, {
      excludeExtraneousValues: true,
    });
  }

  async save(medicineDto: Dto): Promise<any> {
    const saveMedicine = await this.repo.save(medicineDto as any);
    return plainToInstance(MedicineDto, saveMedicine, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, bookDto: any): Promise<{ result: string }> {
    const { image, nameImage } = bookDto;

    if (image && nameImage) {
      const medicine: any = await this.repo.findOne({
        where: {
          id: id as any,
        },
      });
      if (medicine?.nameImage != null) {
        v2.uploader.destroy(medicine?.nameImage);
      }
    }

    await this.repo.update(id, bookDto as any);
    return { result: 'success' };
  }

  async deleteById(id: string): Promise<{ result: string }> {
    const medicine: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (medicine?.nameImage != null) {
      v2.uploader.destroy(medicine?.nameImage);
    }

    await this.repo.delete(id);
    return { result: 'success' };
  }
}
