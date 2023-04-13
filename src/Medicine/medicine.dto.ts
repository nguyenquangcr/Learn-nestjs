import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MedicineDto {
  @Expose()
  id: string;

  @ApiProperty({
    description: 'this is medicine',
    example: 'Thuoc ho',
  })
  @Expose()
  name;

  @Expose()
  description;

  @Expose()
  image;

  @Expose()
  unit;

  @Expose()
  note;

  @Expose()
  price;

  @Expose()
  createAt;

  nameImage: string;

  quantity: number;
}
