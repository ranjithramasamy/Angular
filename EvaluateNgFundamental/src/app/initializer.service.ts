import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBeers } from './beers';

@Injectable()
export class InitializerService {
  private _currValue: string = "";
  private _beersendpoint: string = '/assets/beers.json';

  constructor(private http: HttpClient) { }

  getBeersList(): Observable<IBeers[]> {
    return this.http.get<IBeers[]>(this._beersendpoint);
  }

  getCurrentValue(): string {
    return this._currValue;
  }

  setCurrentValue(value: string) {
    this._currValue = value;
  }
}
