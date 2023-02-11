import { DynamicModule, Module } from '@nestjs/common';
import { DataConfig, DataFeatureConfig, DataRootConfig } from './data.config';
import { DataService } from './data.service';

let rootDataConfig: DataConfig;
export const STORE_CONFIG_TOKEN = 'DATA_CONFIG';
const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({
  providers: [DataService],
  exports: [DataService],
})
export class RootDataModule {}

@Module({})
export class DataModule {
  static forRoot(config?: DataRootConfig): DynamicModule {
    rootDataConfig = DataModule.createConfig(config);
    return {
      module: RootDataModule,
      providers: [
        {
          provide: STORE_CONFIG_TOKEN,
          useValue: rootDataConfig,
        },
      ],
    };
  }

  static forFeature(config: DataFeatureConfig): DynamicModule {
    const token = 'DATA_SERVICE' + config.fileName;
    return {
      module: DataModule,
      imports: [RootDataModule],
      providers: [
        {
          provide: token,
          useFactory: () => {
            const featureStoreConfig = DataModule.createConfig({
              ...rootDataConfig,
              ...config,
            });
            return new DataService(featureStoreConfig);
          },
        },
      ],
      exports: [token],
    };
  }

  private static createConfig(config: DataConfig): DataConfig {
    const defaultConfig: DataConfig = {
      dirName: DEFAULT_STORE_DIRNAME,
      fileName: DEFAULT_FILE_NAME,
    };

    return Object.assign(defaultConfig, config);
  }
}
