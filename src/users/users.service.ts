import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UserService {
  createUser(user: UserDto): any {
    //to do something insert database
    return user;
  }
}
