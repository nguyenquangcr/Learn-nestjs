import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { MedicineDto } from './medicine.dto';
import { MedicineEntity } from './medicine.entity';
import { MedicineMysqlBaseService } from './medicineMysql.service';

@Injectable()
export class MedicineService extends MedicineMysqlBaseService<
  MedicineEntity,
  MedicineDto
> {
  constructor(
    @InjectRepository(MedicineEntity)
    private readonly medicineRepository: Repository<MedicineEntity>,
  ) {
    super(medicineRepository);
  }
}
