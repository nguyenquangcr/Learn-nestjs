import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryProvider } from 'src/common/cloudDinary';
import { MedicineController } from './post.controller';
import { PostEntity } from './post.entity';
import { MedicineService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [MedicineController],
  providers: [CloudinaryProvider, MedicineService],
})
export class PostModule {}
