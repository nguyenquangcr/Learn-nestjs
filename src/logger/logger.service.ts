import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class LoggerService {
  count = 0;
  log(): number {
    this.count++;
    return this.count;
  }
}
