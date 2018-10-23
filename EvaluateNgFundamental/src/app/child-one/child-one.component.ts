import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input} from '@angular/core';
import { InitializerService } from '../initializer.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  providers: [InitializerService, LoggerService]
})
export class ChildOneComponent implements OnInit {
  @Input() childOneInput: string;

  currValue: string;

  constructor(private initSvc: InitializerService, private loggerSvc: LoggerService) { }

  ngOnChanges() {
    console.log("ChildOneComponent :: ngOnChanges()");
  }

  ngOnInit() {
    console.log("ChildOneComponent :: ngOnInit()");
    this.initSvc.setCurrentValue("child-one");
  }

  ngDoCheck() {
    console.log("ChildOneComponent :: ngDoCheck()");
  }

  ngAfterContentInit() {
    console.log("ChildOneComponent :: ngAfterContentInit()");
  }

  ngAfterContentChecked() {
    console.log("ChildOneComponent :: ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("ChildOneComponent :: ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    console.log("ChildOneComponent :: ngAfterViewChecked()");
  }

  ngOnDestroy() {
    console.log("ChildOneComponent :: ngOnDestroy()");
  }

  printCurrentValue() {
    this.currValue = this.initSvc.getCurrentValue();
  }

  log() {
    this.loggerSvc.logInfo("Logging from child one component.");
  }

}
