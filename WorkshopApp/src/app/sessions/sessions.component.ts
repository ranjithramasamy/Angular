import {Component} from '@angular/core';

import {AppComponentMainService} from '../app.component.service';

@Component({
  selector: 'sessions',
  templateUrl: 'sessions.component.html'
})

export class SessionsComponent {
  public sessionsList = [];
  public filters = ['Location', 'Date', 'Speaker'];

  constructor(private _appSvc: AppComponentMainService) {
  }

  ngOnInit() {
    this._appSvc.getSessionsList()
      .subscribe(response => this.sessionsResponseHandler(response));
  }

  sessionsResponseHandler(response) {
    this.sessionsList = response;
  }
}

