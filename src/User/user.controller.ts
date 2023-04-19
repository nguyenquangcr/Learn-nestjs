import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SETTINGS } from 'src/app.utils';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
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
  getById(@Param('id') id: number) {
    console.log('id', id);

    return this.userService.findOne(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }

  @Post('/register')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: UserEntity,
  })
  @ApiBadRequestResponse({ description: 'User cannot register. Try again!' })
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserDto,
  ): Promise<UserEntity> {
    return await this.userService.doUserRegistration(userRegister);
  }
}
