import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material';

import {RegisterComponent} from './register/register.component';
import {environment} from '../environments/environment';

import {ISessions} from './sessions/sessions';
import {ISchedules} from './schedule/schedules';
import {ISpeakers} from './speakers/speakers';

@Injectable()
export class AppComponentMainService {
  private _sessionUrl: string = environment.apiBaseUrl + '/workshop/sessions';
  private _scheduleUrl: string = environment.apiBaseUrl + '/workshop/schedules';
  private _speakerUrl: string = environment.apiBaseUrl + '/workshop/speakers';

  /*private _sessionUrl: string = '/assets/sessions.json';
   private _scheduleUrl: string = '/assets/schedules.json';
   private _speakerUrl: string = '/assets/speakers.json';*/

  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  getSessionsList(): Observable<ISessions[]> {
    return this.http.get<ISessions[]>(this._sessionUrl);
  }

  getScheculesList(): Observable<ISchedules[]> {
    return this.http.get<ISchedules[]>(this._scheduleUrl);
  }

  getSpeakersList(): Observable<ISpeakers[]> {
    return this.http.get<ISpeakers[]>(this._speakerUrl);
  }

  openRegisterDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '550px';
    dialogConfig.data = {name: 'Ranjith', mobileNo: '9944269473'};

    const dialogRef = this.dialog.open(RegisterComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed!');
    });
  }
}
