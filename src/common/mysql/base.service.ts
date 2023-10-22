import { plainToInstance } from 'class-transformer';
import { OrderDto } from 'src/Order/books.dto';
import { Repository } from 'typeorm';
import { BaseEntity } from './base.entity';

export class MysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {}

  async save(orderDto: OrderDto): Promise<any> {
    const formatOrder = { ...orderDto, order: JSON.stringify(orderDto?.order) };

    const saveOrder = await this.repo.save(formatOrder as any);
    return plainToInstance(
      OrderDto,
      { ...saveOrder, order: JSON.parse(saveOrder?.order) },
      {
        excludeExtraneousValues: true,
      },
    );
  }

  async update(id: number, orderDto: OrderDto): Promise<{ result: string }> {
    const formatOrder = { ...orderDto, order: JSON.stringify(orderDto?.order) };
    await this.repo.update(id, formatOrder as any);
    return { result: 'success' };
  }

  async updateStatus(
    id: number,
    body: { status: boolean },
  ): Promise<{ result: string }> {
    await this.repo.update(id, body as any);
    return { result: 'Update status order success' };
  }

  async findAll(): Promise<any> {
    const foundOrder = await this.repo.find();
    if (foundOrder === null) {
      return null;
    } else {
      const newFoundOrder = [];
      foundOrder?.map((item: any) => {
        if (item?.order) {
          try {
            const parsedOrder = JSON.parse(item?.order);
            newFoundOrder.push({
              ...item,
              order: parsedOrder,
            });
          } catch (error) {
            console.log('Invalid JSON:', error);
          }
        }
      });
      return newFoundOrder;
    }
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
      OrderDto,
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
