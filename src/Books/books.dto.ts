import { Expose } from 'class-transformer';

export class OrderDro {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  address: string;

  @Expose()
  note: string;

  @Expose()
  order: string;

  @Expose()
  price: number;
}
