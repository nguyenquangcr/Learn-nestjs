import { Exclude } from 'class-transformer';

export class UserDto {
  username: string;
  name: string;

  @Exclude()
  password: string;
}
