import { Injectable, Logger } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { domainProxyFpt, TELEGRAM_TOKEN } from 'src/config/telegram.constants';
// import TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService {
  private readonly bot: TelegramBot;
  private logger = new Logger(TelegramService.name);

  constructor() {
    this.bot = new TelegramBot(TELEGRAM_TOKEN, {
      polling: true,
      request: {
        proxy: domainProxyFpt,
      },
    });

    this.bot.on('message', this.onReceiveMessage);

    // this.sendMessageToUser(TEST_USER_ID, `Server started at ${new Date()}`);
  }

  onReceiveMessage = (msg: any) => {
    this.logger.debug(msg);
  };

  sendMessageToUser = (userId: string, message: string): any => {
    this.bot.sendMessage(userId, message);
  };
}
