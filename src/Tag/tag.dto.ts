import { Expose } from 'class-transformer';

export class TagDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
