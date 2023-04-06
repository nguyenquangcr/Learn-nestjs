import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderEntity } from './Books/books.entity';
import { BooksModule } from './Books/books.module';
import { MedicineEntity } from './Medicine/medicine.entity';
import { MedicineModule } from './Medicine/medicinemodule';

const localHost: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  database: 'test',
  entities: [OrderEntity, MedicineEntity],
  logger: 'advanced-console',
  logging: 'all',
  synchronize: true, //migration
};

const production: any = {
  type: 'mysql',
  host: 'us-cdbr-east-06.cleardb.net',
  port: 3306,
  username: 'bc232af21d8665',
  password: 'c1276d16',
  database: 'heroku_93b0415a4b35fde',
  entities: [OrderEntity, MedicineEntity],
  logger: 'advanced-console',
  logging: 'all',
  synchronize: true, //migration
};

@Module({
  imports: [
    // UsersModule,
    // PostsModule,
    // DataModule.forRoot(),
    TypeOrmModule.forRoot(production),
    BooksModule,
    MedicineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
