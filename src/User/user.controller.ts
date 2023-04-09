import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.save(user);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() user,
  ): Promise<{ result: string }> {
    return this.userService.update(id, user);
  }

  @Get()
  getAllMedicine() {
    return this.userService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }
}
