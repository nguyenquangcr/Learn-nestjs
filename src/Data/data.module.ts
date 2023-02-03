import { DynamicModule, Module } from '@nestjs/common';
import { DataService } from './data.service';

export interface DataConfig {
  dirName: string;
  fileName: string;
}

@Module({})
export class DataModule {
  static register(config: DataConfig): DynamicModule {
    return {
      module: DataModule,
      providers: [
        DataService,
        {
          provide: 'DATA_CONFIG',
          useValue: config,
        },
      ],
      exports: [DataService],
    };
  }
}
