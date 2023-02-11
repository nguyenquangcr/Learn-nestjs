import { Module } from '@nestjs/common';
import { DataModule } from 'src/Data/data.module';
import { LoggerService } from 'src/logger/logger.service';
import { storeConfig } from 'src/store/store.config';
import { StoreService } from 'src/store/store.service';
import { SecurityService } from './security.service';
import { UsersMockService } from './users-mock.service';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

function createStoreService(value): StoreService {
  return new StoreService();
}

@Module({
  imports: [DataModule.forFeature({ fileName: 'user.json' })],
  controllers: [UsersController],
  providers: [
    LoggerService,
    UserService,
    SecurityService,
    // vi du useClass
    // {
    //   provide: UserService,
    //   useClass: UsersMockService,
    // },

    //vi du ve useValue
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'C',
        path: '/Quang',
      } as storeConfig,
    },
    //vidu ve useFactory
    //co the truyen nhung du lieu da provider duoi dang tham so bang inject
    {
      provide: 'STORE_SERVICE',
      useFactory: createStoreService,
      inject: [{ token: 'STORE_CONFIG', optional: true }],
    },
  ],
})
export class UsersModule {}
