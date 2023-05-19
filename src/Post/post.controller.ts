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
  CreatePost(
    @Body() post: PostDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    return this.postService.save(post, response);
  }

  @Put(':id')
  UpdateStatusPost(@Param('id') id: string) {
    return this.postService.update(id);
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
