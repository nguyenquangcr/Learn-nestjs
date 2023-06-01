import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TimeDto {
  @ApiProperty({
    description: 'Time start',
    example: '2023-05-19',
  })
  startTime: string;

  @ApiProperty({
    description: 'Time end',
    example: '2023-05-19',
  })
  endTime: string;
}
