import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderEntity } from './Order/books.entity';
import { BooksModule } from './Order/books.module';
import { MedicineEntity } from './Medicine/medicine.entity';
import { MedicineModule } from './Medicine/medicinemodule';
import { PostEntity } from './Post/post.entity';
import { PostModule } from './Post/postmodule';
import { UserEntity } from './User/user.entity';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';
import { TagModule } from './Tag/postmodule';
import { TagEntity } from './Tag/tag.entity';

const localHost: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  database: 'test',
  entities: [UserEntity, PostEntity, OrderEntity, MedicineEntity, TagEntity],
  logger: 'advanced-console',
  logging: 'all',
  synchronize: true, //migration
};

const production: any = {
  type: 'mysql',
  host: 'us-cdbr-east-06.cleardb.net',
  port: 3306,
  username: 'bbffc39d66f3b1',
  password: 'a1ea0c9e',
  database: 'heroku_62aa8ec63df710d',
  entities: [UserEntity, PostEntity, OrderEntity, MedicineEntity, TagEntity],
  logger: 'advanced-console',
  logging: 'all',
  synchronize: true, //migration
};

@Module({
  imports: [
    TypeOrmModule.forRoot(localHost),
    TagModule,
    UserModule,
    PostModule,
    BooksModule,
    MedicineModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
