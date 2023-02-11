export interface DataRootConfig {
  dirName: string;
}

export interface DataFeatureConfig {
  fileName: string;
}

export type DataConfig = Partial<DataRootConfig & DataFeatureConfig>;
