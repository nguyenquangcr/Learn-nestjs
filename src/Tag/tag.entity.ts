import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';
import { EnumTag } from './enums/tag.enum';

@Entity({
  name: 'tag',
})
export class TagEntity extends BaseEntity {
  @ApiProperty({
    description: 'The name of the Tag',
    example: 'Đời sống',
  })
  @Column({ type: 'enum', enum: EnumTag, default: EnumTag.DOISONG })
  name: EnumTag;
}
