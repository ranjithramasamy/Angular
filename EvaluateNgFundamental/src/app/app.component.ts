import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { InitializerService } from './initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InitializerService]
})

export class AppComponent implements OnInit {
  currValue: string;
  childOneData: string = "Ranjith";

  constructor(private initSvc: InitializerService) { }

  ngOnChanges() {
    console.log("AppComponent :: ngOnChanges()");
  }

  ngOnInit() {
    console.log("AppComponent :: ngOnInit()");
    this.initSvc.setCurrentValue("app-root");
  }

  ngDoCheck() {
    console.log("AppComponent :: ngDoCheck()");
  }

  ngAfterContentInit() {
    console.log("AppComponent :: ngAfterContentInit()");
  }

  ngAfterContentChecked() {
    console.log("AppComponent :: ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("AppComponent :: ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    console.log("AppComponent :: ngAfterViewChecked()");
  }

  ngOnDestroy() {
    console.log("AppComponent :: ngOnDestroy()");
  }

  printCurrentValue() {
    this.currValue = this.initSvc.getCurrentValue();
  }
}
