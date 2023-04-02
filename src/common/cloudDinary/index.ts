import { v2 } from 'cloudinary';
export const CloudinaryProvider: any = {
  provide: 'Cloudinary',
  useFactory: (): any => {
    return v2.config({
      cloud_name: 'dmttpbcgv',
      api_key: '162139616459754',
      api_secret: 'YoCY5AcZj_oltA5d4GaNz8mZsU4',
    });
  },
};
