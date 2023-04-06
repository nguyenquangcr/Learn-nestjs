import { plainToInstance } from 'class-transformer';
import { OrderDro } from 'src/Books/books.dto';
import { Repository } from 'typeorm';
import { BaseEntity } from './base.entity';

export class MysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {}

  async save(orderDto: OrderDro): Promise<any> {
    const formatOrder = { ...orderDto, order: JSON.stringify(orderDto?.order) };

    const saveOrder = await this.repo.save(formatOrder as any);
    return plainToInstance(
      OrderDro,
      { ...saveOrder, order: JSON.parse(saveOrder?.order) },
      {
        excludeExtraneousValues: true,
      },
    );
  }

  async update(id: string, orderDto: OrderDro): Promise<{ result: string }> {
    const formatOrder = { ...orderDto, order: JSON.stringify(orderDto?.order) };
    await this.repo.update(id, formatOrder as any);
    return { result: 'success' };
  }

  async findAll(): Promise<any> {
    const foundOrder = await this.repo.find();
    if (foundOrder === null) {
      return null;
    } else
      return foundOrder?.map((item: any) => {
        return { ...item, order: JSON.parse(item?.order) };
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

    return plainToInstance(
      OrderDro,
      { ...foundOrder, order: JSON.parse(foundOrder?.order) },
      {
        excludeExtraneousValues: true,
      },
    );
  }

  async deleteById(id: string): Promise<{ result: string }> {
    await this.repo.delete(id);
    return { result: 'success' };
  }
}
