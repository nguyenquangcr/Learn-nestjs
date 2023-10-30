import { Controller, Get } from '@nestjs/common';
import { userOrGroupIdTelegram } from 'src/config/telegram.constants';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get()
  getHello(): string {
    return this.telegramService.sendMessageToUser(
      userOrGroupIdTelegram,
      'Tin nhắn tự động',
    );
  }
}
