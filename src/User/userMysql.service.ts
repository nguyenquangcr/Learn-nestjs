import { plainToInstance } from 'class-transformer';
import { BaseEntity } from 'src/common/mysql/base.entity';

import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

export class UserMysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {}

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

  async findOne(id: string): Promise<any> {
    const foundOrder: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (foundOrder === null) {
      return null;
    }

    return plainToInstance(UserDto, foundOrder, {
      excludeExtraneousValues: true,
    });
  }

  async deleteById(id: string): Promise<{ result: string }> {
    await this.repo.delete(id);
    return { result: 'success' };
  }
}
