import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { PostDto } from './post.dto';
import { PostEntity } from './post.entity';
import { PostMysqlBaseService } from './postMysql.service';

@Injectable()
export class PostService extends PostMysqlBaseService<PostEntity, PostDto> {
  constructor(
    @InjectRepository(PostEntity)
    private readonly PostRepository: Repository<PostEntity>,
  ) {
    super(PostRepository);
  }
}
