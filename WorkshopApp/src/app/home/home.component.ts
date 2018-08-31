import {Component} from '@angular/core';

import {Subscription, timer} from 'rxjs';

import {AppComponentMainService} from '../app.component.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  private today: number = Date.now();
  private subscription: Subscription;

  constructor(private _appSvc: AppComponentMainService) {
  }

  ngOnInit() {
    const timerObj = timer(0, 1000);
    this.subscription = timerObj.subscribe(t => this.onTimerHandler(t));
  }

  onTimerHandler(counter) {
    this.today = Date.now();
  }

  onRegister() {
    this._appSvc.openRegisterDialog();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
