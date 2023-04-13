import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'order',
})
export class OrderEntity extends BaseEntity {
  @Column({ length: 50 })
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  note: string;

  @Column()
  address: string;

  @Column()
  order: string;

  @Column()
  price: number;

  @Column({ default: false })
  status: boolean;
}
