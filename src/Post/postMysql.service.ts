import { plainToInstance } from 'class-transformer';
import { isObject } from 'class-validator';
import { Repository } from 'typeorm';
import { PostDto } from './post.dto';
import { BadRequestException } from '@nestjs/common';
import { PostEntity } from './post.entity';

export class PostMysqlBaseService<Entity extends PostEntity, PostDto> {
  constructor(protected repo: Repository<Entity>) {}

  //Thêm bài viết
  async save(PostDto: any): Promise<{ result: string }> {
    const savePost = await this.repo.save(PostDto as any);
    if (isObject(savePost)) {
      return { result: 'Thêm bài viết thành công' };
    } else throw new BadRequestException();
  }

  //Phê duyệt bài viết
  async update(id: string, query: any): Promise<{ result: string }> {
    const Post: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (Post) {
      const newPost = {
        ...Post,
        status: query?.status == 'true' ? true : false,
      };
      await this.repo.update(id, newPost as any);
      return { result: 'success' };
    } else throw new BadRequestException();
  }

  //Gắn tag cho bài viết
  async updateTag(id: string, query: any): Promise<{ result: string }> {
    const Post: any = await this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    if (Post) {
      const newPost = {
        ...Post,
        tags: query?.tag,
      };
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
