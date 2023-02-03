import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UsersMockService {
  createUser(user: UserDto): any {
    return {
      password: 'mockPass',
      username: 'Quang',
    };
  }
}
