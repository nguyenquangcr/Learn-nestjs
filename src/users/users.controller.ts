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
import { storeConfig } from 'src/store/store.config';
import { StoreService } from 'src/store/store.service';
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
    @Inject('STORE_CONFIG') private readonly storeConfig: storeConfig,
    @Inject('STORE_SERVICE') private readonly storeService: StoreService,
  ) {
    console.log('storeConfig', this.storeConfig);
  }

  @Get()
  getAllUsers() {
    return [{ name: 'Giang', age: 18 }];
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return 'test';
  }

  // Đây là khai báo một pipe trong từng router -> ta thay đôi bằng cách khởi tạo pipe trong global
  // @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): any {
    this.storeService.save(user);
    // const userService = this.moduleRef.get('USER_SERVICE_QUANG');
    // return plainToInstance(UserDto, this.userService.createUser(user));
  }
}
