import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TagDto {
  @Expose()
  id: string;

  @ApiProperty({
    description: 'The name of the Tag',
    example: 'Đời sống',
  })
  @Expose()
  name: string;
}
