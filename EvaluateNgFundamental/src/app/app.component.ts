import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
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
  beersList = from([
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
  ]);

  constructor(private initSvc: InitializerService) { }

  ngOnChanges() {
    console.log("AppComponent :: ngOnChanges()");
  }

  ngOnInit() {
    console.log("AppComponent :: ngOnInit()");
    this.initSvc.setCurrentValue("app-root");
    /*this.initSvc.getBeersList()
      .flatMap((response) => response.json())
      .map((beer: any) => {
        beer.price = "$" + beer.price;
        return beer;
      })
      .subscribe((beer: any) => console.log(beer.name + " " + beer.country + " " + beer.price));*/

    const mappedObj = map((beer: any) => {
      beer.price = "$" + beer.price;
      return beer;
    });
    const observerObj = mappedObj(this.beersList);
    observerObj.subscribe((beer: any) => console.log(beer.name + " " + beer.country + " " + beer.price));
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
