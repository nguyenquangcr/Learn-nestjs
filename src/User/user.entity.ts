import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './enums/user.enum';

@Entity({
  name: 'account',
})
export class UserEntity extends BaseEntity {
  @ApiProperty({ description: 'User name', example: 'Peter Parker' })
  @Column({ length: 50 })
  name: string;

  @ApiProperty({
    description: 'User email address',
    example: 'PeterParker@gmail.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'User phone number',
    example: '0946806186',
  })
  @Column()
  phoneNumber: string;

  @ApiProperty({
    description: 'User address',
    example: 'District 1',
  })
  @Column()
  address: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;
}
