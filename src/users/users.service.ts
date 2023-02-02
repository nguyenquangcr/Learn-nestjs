import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UserService {
  createUser(user: any): any {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return UserDto.plainToInstance(user);
  }
}
