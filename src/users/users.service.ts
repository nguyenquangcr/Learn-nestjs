import { Injectable } from '@nestjs/common';
import { DataService } from 'src/Data/data.service';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UserService {
  constructor(private dataService: DataService) {}

  createUser(user: UserDto): any {
    //to do something insert database
    this.dataService.save(user);
    return user;
  }
}
