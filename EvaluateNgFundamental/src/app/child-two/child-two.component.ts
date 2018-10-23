import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { InitializerService } from '../initializer.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
  providers: [InitializerService]
})
export class ChildTwoComponent implements OnInit {
  currValue: string;

  constructor(private initSvc: InitializerService) { }

  ngOnChanges() {
    console.log("ChildTwoComponent :: ngOnChanges()");
  }

  ngOnInit() {
    console.log("ChildTwoComponent :: ngOnInit()");
    this.initSvc.setCurrentValue("child-two");
  }

  ngDoCheck() {
    console.log("ChildTwoComponent :: ngDoCheck()");
  }

  ngAfterContentInit() {
    console.log("ChildTwoComponent :: ngAfterContentInit()");
  }

  ngAfterContentChecked() {
    console.log("ChildTwoComponent :: ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("ChildTwoComponent :: ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    console.log("ChildTwoComponent :: ngAfterViewChecked()");
  }

  ngOnDestroy() {
    console.log("ChildTwoComponent :: ngOnDestroy()");
  }

  printCurrentValue() {
    this.currValue = this.initSvc.getCurrentValue();
  }

}
