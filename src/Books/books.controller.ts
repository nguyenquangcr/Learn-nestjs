import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from 'src/user.dto';
import { BooksDto } from './books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  createBooks(@Body() book): Promise<BooksDto> {
    return this.bookService.save(book);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() book,
  ): Promise<{ result: string }> {
    return this.bookService.update(id, book);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.bookService.deleteById(id);
  }
}
