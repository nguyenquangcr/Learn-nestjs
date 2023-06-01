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

import toStream = require('buffer-to-stream');
import { v2 } from 'cloudinary';
import { ApiTags } from '@nestjs/swagger';
import { query, Response } from 'express';
import { TagService } from './tag.service';
import { TagDto } from './tag.dto';

@ApiTags('Tag')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  CreatePost(@Body() tag: TagDto): Promise<any> {
    return this.tagService.save(tag);
  }

  @Post('/getList')
  GetListPost(@Body() time: { startTime: string; endTime: string }) {
    return this.tagService.findAll(time);
  }
}
