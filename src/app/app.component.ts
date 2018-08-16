import { Component } from '@angular/core';

import { AppComponentMainService } 	from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})

export class AppComponentMain {
  constructor(private _appSvc: AppComponentMainService) { }

  openDialog(): void {
    this._appSvc.openRegisterDialog();
  }
}
