import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'medicine',
})
export class MedicineEntity extends BaseEntity {
  @Column({ length: 50 })
  name: string;

  @Column()
  description: string;

  @Column({
    default: '',
  })
  image: string;

  @Column({ length: 50 })
  unit: string;

  @Column({ length: 50 })
  note: string;

  @Column()
  price: number;

  @Column({ default: 'medicine' })
  tags: string;

  @Column({ default: null })
  nameImage: string;

  @Column({ default: 0 })
  quantity: number;
}
