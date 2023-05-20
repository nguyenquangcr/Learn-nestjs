import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostDto } from './post.dto';
import { PostService } from './post.service';
import toStream = require('buffer-to-stream');
import { v2 } from 'cloudinary';
import { ApiTags } from '@nestjs/swagger';
import { query, Response } from 'express';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  CreatePost(@Body() post: PostDto): Promise<any> {
    return this.postService.save(post);
  }

  @Put(':id')
  UpdateStatusPost(
    @Param('id') id: string,
    @Query() query: { status: boolean },
  ) {
    return this.postService.update(id, query);
  }

  @Put(':id/updateTag')
  UpdateTagPost(@Param('id') id: string, @Query() query: { tag: string }) {
    return this.postService.updateTag(id, query);
  }

  @Get()
  GetListPost(@Query() query: { status: boolean }) {
    return this.postService.findAll(query);
  }

  @Get(':id')
  GetDetailPost(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Delete(':id')
  DeletePost(@Param('id') id: string) {
    return this.postService.deleteById(id);
  }
}
