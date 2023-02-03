import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './Data/data.module';
import { UsersModule } from './users/users.module';
import { UserService } from './users/users.service';

@Module({
  imports: [
    UsersModule,
    DataModule.register({ dirName: ' 321', fileName: '3213' }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'App_USER',
      useClass: UserService,
    },
  ],
})
export class AppModule {}
