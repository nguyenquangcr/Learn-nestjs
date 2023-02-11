import { Inject, Optional } from '@nestjs/common';
import { STORE_CONFIG_TOKEN } from './data.module';
import * as fs from 'fs';
import { DataConfig } from './data.config';

export class DataService {
  constructor(
    @Optional()
    @Inject(STORE_CONFIG_TOKEN)
    private readonly dataConfig: DataConfig,
  ) {
    if (dataConfig && !fs.existsSync(dataConfig.dirName)) {
      fs.mkdirSync(dataConfig.dirName);
    }
  }
  save(data: any): void {
    fs.appendFileSync(
      `${this.dataConfig.dirName}/${this.dataConfig.fileName}`,
      JSON.stringify(data),
    );
  }
}
