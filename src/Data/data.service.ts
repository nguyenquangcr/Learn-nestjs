import { Inject, Injectable } from '@nestjs/common';
import { DataConfig } from './data.module';
import * as fs from 'fs';

@Injectable()
export class DataService {
  constructor(@Inject('DATA_CONFIG') private readonly dataConfig: DataConfig) {
    if (!fs.existsSync(this.dataConfig.dirName)) {
      fs.mkdirSync(this.dataConfig.dirName);
    }
  }
  save(data: any): void {
    fs.appendFileSync(
      `${this.dataConfig.dirName}/${this.dataConfig.fileName}`,
      JSON.stringify(data),
    );
  }
}
