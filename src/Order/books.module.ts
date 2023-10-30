import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './books.controller';
import { OrderEntity } from './books.entity';
import { OrderService } from './books.service';
import { TelegramModule } from 'src/Telegram/telegram.module';
import { TelegramService } from 'src/Telegram/telegram.service';

@Module({
  imports: [TelegramModule, TypeOrmModule.forFeature([OrderEntity])],
  controllers: [OrderController],
  providers: [OrderService, TelegramService],
})
export class BooksModule {}
