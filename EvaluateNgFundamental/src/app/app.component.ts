import { Component, OnInit } from '@angular/core';
import { InitializerService } from './initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InitializerService]
})

export class AppComponent implements OnInit {
  currValue: string;

  constructor(private initSvc: InitializerService) { }

  ngOnInit() {
    this.initSvc.setCurrentValue("app-root");
  }

  printCurrentValue() {
    this.currValue = this.initSvc.getCurrentValue();
  }
}
