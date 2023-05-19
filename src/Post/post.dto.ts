import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PostDto {
  @Expose()
  id: string;

  @ApiProperty({
    description: 'Title post',
    example: 'itle post',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'Title post',
    example: 'itle post',
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: 'Title post',
    example: 'itle post',
  })
  @Expose()
  linkImage: string;

  @ApiProperty({
    description: 'Title post',
    example: 'itle post',
  })
  @Expose()
  content: string;

  @ApiProperty({
    description: 'Title post',
    example: 'itle post',
  })
  @Expose()
  status: boolean;

  @ApiProperty({
    description: 'Title post',
    example: 'itle post',
  })
  @Expose()
  tags: string;
}
