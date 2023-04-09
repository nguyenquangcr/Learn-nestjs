import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserMysqlBaseService } from './userMysql.service';

@Injectable()
export class UserService extends UserMysqlBaseService<UserEntity, UserDto> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly booksRepository: Repository<UserEntity>,
  ) {
    super(booksRepository);
  }
}
