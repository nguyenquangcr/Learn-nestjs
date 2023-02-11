import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from './users.service';

@Injectable({})
export class SecurityService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private usersService: UserService,
  ) {}
}
