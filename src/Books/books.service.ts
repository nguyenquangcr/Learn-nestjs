import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { MysqlBaseService } from 'src/common/mysql/base.service';
import { Repository } from 'typeorm';
import { BooksDto } from './books.dto';
import { BooksEntity } from './books.entity';

@Injectable()
export class BooksService extends MysqlBaseService<BooksEntity, BooksDto> {
  constructor(
    @InjectRepository(BooksEntity)
    private readonly booksRepository: Repository<BooksEntity>,
  ) {
    super(booksRepository);
  }
}
