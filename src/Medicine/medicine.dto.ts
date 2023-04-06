import { Expose, Transform } from 'class-transformer';

export class MedicineDto {
  @Expose()
  id: string;

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

  nameImage: string;

  quantity: number;
}
