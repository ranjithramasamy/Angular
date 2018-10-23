import { Injectable } from '@angular/core';

@Injectable()

export class InitializerService {
  private _currValue: string = "";

  constructor() { }

  getCurrentValue(): string {
    return this._currValue;
  }

  setCurrentValue(value: string) {
    this._currValue = value;
  }
}
