import { Module } from '@nestjs/common';
import { DataModule } from 'src/Data/data.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [DataModule.forFeature({ fileName: 'posts.json' })],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
