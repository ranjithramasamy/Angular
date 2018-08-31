import {Component} from '@angular/core';

import {AppComponentMainService} from '../app.component.service';

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.component.html'
})

export class ScheduleComponent {
  public schedulesList = [];
  public filters = ['Location', 'Date', 'Speaker'];

  constructor(private _appSvc: AppComponentMainService) {
  }

  ngOnInit() {
    this._appSvc.getScheculesList()
      .subscribe(response => this.scheduleResponseHandler(response));
  }

  scheduleResponseHandler(response) {
    this.schedulesList = response;
  }
}
