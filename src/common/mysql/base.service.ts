import { plainToInstance } from 'class-transformer';
import { OrderDto } from 'src/Order/books.dto';
import { TimeDto } from 'src/Tag/enums/time.enum';
import { Between, Repository } from 'typeorm';
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

  async findAll(time: { startDay: string; endDay: string }): Promise<any> {
    let listOrder = [];
    if (time.startDay && time.endDay) {
      listOrder = await this.repo.find({
        where: {
          createAt: Between(time.startDay, time.endDay) as any,
        },
      });
    } else {
      listOrder = await this.repo.find();
    }

    if (listOrder === null) {
      return null;
    } else {
      const newFoundOrder = [];
      listOrder?.map((item: any) => {
        if (item?.order) {
          try {
            const parsedOrder = JSON.parse(item?.order.replace(/\//g, '-'));
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
