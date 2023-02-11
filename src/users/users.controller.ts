import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { plainToInstance } from 'class-transformer';
import { LoggerService } from 'src/logger/logger.service';
import { storeConfig } from 'src/store/store.config';
// import { StoreService } from 'src/store/store.service';
import { UserDto } from 'src/user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  // Cách 1: khai báo ra moduleRef private kế thừa phương thức ModuleRef của nodejs cung cấp
  // constructor(private moduleRef: ModuleRef) {}

  // cách 2: sử dụng trực tiếp nhưng class cần ví dụ như userService
  // constructor(private readonly userService: UserService) {}
  // constructor(
  //   @Inject('USER_SERVICE_QUANG') private readonly userService: UserService,
  // ) {}
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggerService,
  ) {
    console.log('userService.getlog()', userService.getlog());
    console.log('logger', logger);

    console.log('chay vao day', logger == userService.getlog());
  }

  // @Get()
  // getAllUsers() {
  //   return [{ name: 'Giang', age: 18 }];
  // }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return 'test';
  }

  // Đây là khai báo một pipe trong từng router -> ta thay đôi bằng cách khởi tạo pipe trong global
  // @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): any {
    return [this.logger.log(), this.userService.getlog().log()];
  }

  @Get()
  test1() {
    return this.logger.log();
  }
}
