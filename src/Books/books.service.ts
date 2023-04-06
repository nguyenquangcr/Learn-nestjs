import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { MysqlBaseService } from 'src/common/mysql/base.service';
import { Repository } from 'typeorm';
import { OrderDro } from './books.dto';
import { OrderEntity } from './books.entity';

@Injectable()
export class OrderService extends MysqlBaseService<OrderEntity, OrderDro> {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly booksRepository: Repository<OrderEntity>,
  ) {
    super(booksRepository);
  }
}
