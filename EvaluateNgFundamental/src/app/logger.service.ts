import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {

  constructor() { }

  logInfo(msg: string) {
    console.log(msg);
  }
}
