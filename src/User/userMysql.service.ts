import { plainToInstance } from 'class-transformer';
import { BaseEntity } from 'src/common/mysql/base.entity';

import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

export class UserMysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<any>) {}

  async save(orderDto: any): Promise<any> {
    const formatOrder = orderDto;

    const saveOrder = await this.repo.save(formatOrder as any);
    return plainToInstance(UserDto, saveOrder, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, orderDto: UserDto): Promise<{ result: string }> {
    const formatOrder = orderDto;
    await this.repo.update(id, formatOrder as any);
    return { result: 'success' };
  }

  async findAll(): Promise<any> {
    const foundOrder = await this.repo.find();
    if (foundOrder === null) {
      return null;
    } else
      return foundOrder?.map((item: any) => {
        return item;
      });
  }

  async findOne(id: number): Promise<any> {
    const foundOrder: any = await this.repo.findOneById(id);

    if (foundOrder === null) {
      return null;
    }

    return foundOrder;
  }

  async deleteById(id: string): Promise<{ result: string }> {
    await this.repo.delete(id);
    return { result: 'success' };
  }

  async doUserRegistration(userRegister: UserDto): Promise<UserEntity> {
    const user = new UserEntity();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    user.phoneNumber = userRegister.phoneNumber;
    return await this.repo.save(user as any);
  }

  async getUserByEmail(email: any): Promise<UserEntity | undefined> {
    return this.repo.findOne({ where: { email: email as any } });
  }

  async getUserById(id: number): Promise<UserEntity | undefined> {
    return this.repo.findOne({ where: { id } });
  }
}
