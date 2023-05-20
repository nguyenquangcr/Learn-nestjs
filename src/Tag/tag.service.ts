import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagDto } from './tag.dto';
import { TagEntity } from './tag.entity';
import { TagMysqlBaseService } from './tagMysql.service';

@Injectable()
export class TagService extends TagMysqlBaseService<TagEntity, TagDto> {
  constructor(
    @InjectRepository(TagEntity)
    private readonly PostRepository: Repository<TagEntity>,
  ) {
    super(PostRepository);
  }
}
