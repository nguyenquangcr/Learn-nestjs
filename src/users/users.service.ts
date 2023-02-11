import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { DataService } from 'src/Data/data.service';
import { LoggerService } from 'src/logger/logger.service';
import { UserDto } from 'src/user.dto';
import { SecurityService } from './security.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('DATA_SERVICEuser.json') private dataService: DataService,
    private readonly logger: LoggerService,
    @Inject(forwardRef(() => SecurityService))
    private readonly sercurityService: SecurityService,
  ) {}

  create(user: UserDto): UserDto {
    this.dataService.save(user);
    return user;
  }
  getlog() {
    return this.logger;
  }
}
