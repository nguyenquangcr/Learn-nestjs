import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'posts',
})
export class PostEntity extends BaseEntity {
  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  linkImage: string;

  @Column({ default: '' })
  content: string;

  @Column({ default: false })
  status: boolean;

  @Column({ default: '' })
  tags: string;
}
