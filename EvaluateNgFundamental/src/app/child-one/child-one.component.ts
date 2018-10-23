import { Component, OnInit } from '@angular/core';
import { InitializerService } from '../initializer.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  providers: [InitializerService, LoggerService]
})
export class ChildOneComponent implements OnInit {
  currValue: string;

  constructor(private initSvc: InitializerService, private loggerSvc: LoggerService) { }

  ngOnInit() {
    this.initSvc.setCurrentValue("child-one");
  }

  printCurrentValue() {
    this.currValue = this.initSvc.getCurrentValue();
  }

  log() {
    this.loggerSvc.logInfo("Logging from child one component.");
  }

}
