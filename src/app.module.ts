import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './Data/data.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { UserService } from './users/users.service';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
