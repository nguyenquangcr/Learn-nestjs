import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { MysqlBaseService } from 'src/common/mysql/base.service';
import { Repository } from 'typeorm';
import { OrderDto } from './books.dto';
import { OrderEntity } from './books.entity';
import { TelegramService } from 'src/Telegram/telegram.service';

@Injectable()
export class OrderService extends MysqlBaseService<OrderEntity, OrderDto> {
  constructor(
    @InjectRepository(OrderEntity)
    public booksRepository: Repository<OrderEntity>,
    public telegramService: TelegramService,
  ) {
    super(booksRepository, telegramService);
  }
}
