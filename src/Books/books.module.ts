import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksEntity } from './books.entity';
import { BooksService } from './books.service';

@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
