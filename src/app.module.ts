import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksEntity } from './Books/books.entity';
import { BooksModule } from './Books/books.module';
import { DataModule } from './Data/data.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // UsersModule,
    // PostsModule,
    // DataModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'test',
      entities: [BooksEntity],
      logger: 'advanced-console',
      logging: 'all',
      synchronize: true, //migration
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
