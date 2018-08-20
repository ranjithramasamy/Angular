import { Component } from '@angular/core';

import { AppComponentMainService } 	from '../app.component.service';

@Component({
  selector: 'speakers',
  templateUrl: 'speakers.component.html'
})

export class SpeakersComponent {
  public speakersList = [];
  public filters = ["Location", "Date", "Speaker"];

  constructor(private _appSvc: AppComponentMainService) { }

  ngOnInit() {
	  this._appSvc.getSpeakersList()
	  	.subscribe(response => this.speakersResponseHandler(response));
  }

  speakersResponseHandler(response){
	this.speakersList = response;
  }
}
