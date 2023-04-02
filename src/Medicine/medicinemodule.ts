import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryProvider } from 'src/common/cloudDinary';
import { MedicineController } from './medicine.controller';
import { MedicineEntity } from './medicine.entity';
import { MedicineService } from './medicine.service';

@Module({
  imports: [TypeOrmModule.forFeature([MedicineEntity])],
  controllers: [MedicineController],
  providers: [CloudinaryProvider, MedicineService],
})
export class MedicineModule {}
