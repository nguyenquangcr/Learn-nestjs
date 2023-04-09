import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'posts',
})
export class PostEntity extends BaseEntity {
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

  @Column({ default: 'post' })
  tags: string;

  @Column({ default: null })
  nameImage: string;
}
