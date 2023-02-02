import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { UserDto } from 'src/user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  // Cách 1: khai báo ra moduleRef private kế thừa phương thức ModuleRef của nodejs cung cấp
  // constructor(private moduleRef: ModuleRef) {}

  // cách 2: sử dụng trực tiếp nhưng class cần ví dụ như userService
  // constructor(private readonly userService: UserService) {}
  constructor(
    @Inject('USER_SERVICE_QUANG') private readonly userService: UserService,
  ) {}

  @Get()
  getAllUsers() {
    return [{ name: 'Giang', age: 18 }];
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return 'test';
  }

  // @UsePipes(new ValidationPipe())
  // Đây là khai báo một pipe trong từng router -> ta thay đôi bằng cách khởi tạo pipe trong global
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    // const userService = this.moduleRef.get('USER_SERVICE_QUANG');
    return this.userService.createUser(user);
  }
}
