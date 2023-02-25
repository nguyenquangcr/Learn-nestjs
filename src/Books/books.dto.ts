import { Expose, Transform } from 'class-transformer';

export class BooksDto {
  @Expose()
  id: string;

  firstName: string;
  lastName: string;

  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  @Expose()
  fullName;

  @Expose()
  isActive: boolean;
}
