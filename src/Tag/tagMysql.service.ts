import { isObject } from 'class-validator';
import { Between, Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { TagEntity } from './tag.entity';

export class TagMysqlBaseService<Entity extends TagEntity, TagDto> {
  constructor(protected repo: Repository<Entity>) {}

  //Thêm bài viết
  async save(TagDto: any): Promise<{ result: string }> {
    const saveTag = await this.repo.save(TagDto as any);
    if (isObject(saveTag)) {
      return { result: 'Thành công' };
    } else throw new BadRequestException();
  }

  //Tìm kiếm tất cả và tìm kiểu theo status
  async findAll(time: { startTime: string; endTime: string }) {
    let Tags = {
      lamdep: 0,
      doisong: 0,
      amthuc: 0,
      dulich: 0,
      tuvi: 0,
      thoitrang: 0,
      suckhoe: 0,
      khampha: 0,
      congnghe: 0,
    };
    let listTag = [];
    if (time.startTime && time.endTime) {
      listTag = await this.repo.find({
        where: {
          createAt: Between(time.startTime, time.endTime) as any,
        },
      });
    } else {
      listTag = await this.repo.find();
    }

    listTag.map((item) => {
      Tags = { ...Tags, [item.name]: Tags[item.name] + 1 };
    });
    return Tags;
  }
}
