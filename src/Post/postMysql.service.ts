import { plainToInstance } from 'class-transformer';
import { IsObject, isObject } from 'class-validator';
import { v2 } from 'cloudinary';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Repository } from 'typeorm';
import { PostDto } from './post.dto';
import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';
import { PostEntity } from './post.entity';

export class PostMysqlBaseService<Entity extends PostEntity, PostDto> {
  constructor(protected repo: Repository<Entity>) {}

  //Thêm bài viết
  async save(PostDto: any, response: Response): Promise<any> {
    const savePost = await this.repo.save(PostDto as any);
    if (isObject(savePost)) {
      return response.status(200).send('Thêm bài viết thành công');
    }
  }

  //Phê duyệt bài viết
  async update(id: string): Promise<{ result: string }> {
    const Post: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (Post) {
      const newPost = { ...Post, status: true };
      await this.repo.update(id, newPost as any);
      return { result: 'success' };
    } else throw new BadRequestException();
  }

  //Tìm kiếm tất cả và tìm kiểu theo status
  async findAll(query: { status: boolean }) {
    let listPost = null;
    if (query.status) {
      listPost = await this.repo.find({
        where: { status: true as any },
      });
    } else listPost = await this.repo.find();

    return plainToInstance(PostDto, listPost, {
      excludeExtraneousValues: true,
    });
  }

  //Tìm kiếm theo id
  async findOne(id: string) {
    const post = this.repo.findOne({
      where: {
        id: id as any,
      },
    });

    if (post) {
      return plainToInstance(PostDto, post, {
        excludeExtraneousValues: true,
      });
    } else throw BadRequestException;
  }

  //Xoá bài viết
  async deleteById(id: string): Promise<{ result: string }> {
    await this.repo.delete(id);
    return { result: 'success' };
  }
}
