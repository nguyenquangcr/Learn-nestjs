import { plainToInstance } from 'class-transformer';
import { BooksDto } from 'src/Books/books.dto';
import { Repository } from 'typeorm';
import { BaseEntity } from './base.entity';

export class MysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {}

  async save(bookDto: Dto): Promise<any> {
    const saveBook = await this.repo.save(bookDto as any);
    return plainToInstance(BooksDto, saveBook, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, bookDto: Dto): Promise<{ result: string }> {
    const updateResult = await this.repo.update(id, bookDto as any);
    return { result: 'success' };
  }

  async findOne(id: string): Promise<any> {
    const foundBooks = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (foundBooks === null) {
      return null;
    }
    return plainToInstance(BooksDto, foundBooks, {
      excludeExtraneousValues: true,
    });
  }

  async deleteById(id: string): Promise<{ result: string }> {
    const deleteResult = await this.repo.softDelete(id);
    return { result: 'success' };
  }
}
