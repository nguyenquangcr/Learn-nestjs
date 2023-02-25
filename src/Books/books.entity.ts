import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class BooksEntity extends BaseEntity {
  @Column({ length: 50 })
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    default: false,
  })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ['admin', 'group'],
    default: 'admin',
  })
  role: string;
}
