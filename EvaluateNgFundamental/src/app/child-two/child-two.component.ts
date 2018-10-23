import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.initSvc.setCurrentValue("child-two");
  }

  printCurrentValue() {
    this.currValue = this.initSvc.getCurrentValue();
  }

}
