import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserDto {
  @ApiProperty({ description: 'User name', example: 'Peter Parker' })
  @Expose()
  name: string;

  @ApiProperty({
    description: 'User email address',
    example: 'PeterParker@gmail.com',
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: 'User phone number',
    example: '0946806186',
  })
  @Expose()
  phoneNumber: string;

  @ApiProperty({
    description: 'User address',
    example: 'District 1',
  })
  @Expose()
  address: string;

  @ApiProperty({
    description: 'User role',
    example: 'Member',
  })
  @Expose()
  role: string;
}
