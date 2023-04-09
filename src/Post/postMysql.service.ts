import { plainToInstance } from 'class-transformer';
import { v2 } from 'cloudinary';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Repository } from 'typeorm';
import { PostDto } from './post.dto';

export class MedicineMysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {}

  async findAll() {
    const listPost = await this.repo.find({});

    return plainToInstance(PostDto, listPost, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: string): Promise<any> {
    const foundPost: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (foundPost === null) {
      return null;
    }

    return plainToInstance(PostDto, foundPost, {
      excludeExtraneousValues: true,
    });
  }

  async save(PostDto: any): Promise<any> {
    const savePost = await this.repo.save(PostDto as any);
    return plainToInstance(PostDto, savePost, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, bookDto: any): Promise<{ result: string }> {
    const { image, nameImage } = bookDto;

    if (image && nameImage) {
      const Post: any = await this.repo.findOne({
        where: {
          id: id as any,
        },
      });
      if (Post?.nameImage != null) {
        v2.uploader.destroy(Post?.nameImage);
      }
    }

    await this.repo.update(id, bookDto as any);
    return { result: 'success' };
  }

  async deleteById(id: string): Promise<{ result: string }> {
    const Post: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (Post?.nameImage != null) {
      v2.uploader.destroy(Post?.nameImage);
    }

    await this.repo.delete(id);
    return { result: 'success' };
  }
}
