import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from 'src/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [{ name: 'Giang', age: 18 }];
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log('id12', id);
    return 'test';
  }

  // @UsePipes(new ValidationPipe())         Đây là khai báo một pipe trong từng router -> ta thay đôi bằng cách khởi tạo pipe trong global
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return {
      username: 'test',
      password: 'test',
    };
  }
}
