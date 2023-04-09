import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PostDto {
  @Expose()
  id: string;

  @ApiProperty({
    description: 'this is name post',
    example: 'Name post',
  })
  @Expose()
  name;

  @ApiProperty({
    description: 'this is des post',
    example: 'Des post',
  })
  @Expose()
  description;

  @ApiProperty({
    description: 'this is image post',
    example: 'image post',
  })
  @Expose()
  image;

  @ApiProperty({
    description: 'this is unit post',
    example: 'unit post',
  })
  @Expose()
  unit;

  @ApiProperty({
    description: 'this is note post',
    example: 'note post',
  })
  @Expose()
  note;

  @ApiProperty({
    description: 'this is tags post',
    example: 'tags post',
  })
  @Expose()
  tags;

  nameImage: string;
}
