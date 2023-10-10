import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class InternalErrorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      next();
    } catch (error) {
      // Xử lý lỗi và gửi phản hồi với mã lỗi 500
      const message = 'Thao tác của bạn gặp lỗi. Vui lòng thử lại sau!';
      const status = HttpStatus.INTERNAL_SERVER_ERROR;
      throw new HttpException({ message, status: 500 }, status);
    }
  }
}
