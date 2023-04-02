import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksEntity } from './Books/books.entity';
import { BooksModule } from './Books/books.module';
import { MedicineEntity } from './Medicine/medicine.entity';
import { MedicineModule } from './Medicine/medicinemodule';

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
      entities: [BooksEntity, MedicineEntity],
      logger: 'advanced-console',
      logging: 'all',
      synchronize: true, //migration
    }),
    BooksModule,
    MedicineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
