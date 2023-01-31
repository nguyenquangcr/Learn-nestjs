import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UserDto } from 'src/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [{ name: 'Giang', age: 18 }];
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return 'test';
  }

  // @UsePipes(new ValidationPipe())         Đây là khai báo một pipe trong từng router -> ta thay đôi bằng cách khởi tạo pipe trong global
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return UserDto.plainToInstance(user);
  }
}
