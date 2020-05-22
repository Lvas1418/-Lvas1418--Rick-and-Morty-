import {Component, OnInit} from '@angular/core';
import {angularMath} from 'angular-ts-math';

@Component({
  selector: 'app-my-profit',
  templateUrl: './my-profit.component.html',
  styleUrls: ['./my-profit.component.css']
})
export class MyProfitComponent implements OnInit {

  constructor() {
  }

  persent;
  profit;
  daysLeft;
  amountOfDeals;

  ngOnInit() {
  }

  getPercent(e) {
    this.persent = 0;
    let result;
    this.daysLeft = angularMath.getIntegerRandomRange(0, 31);
    this.amountOfDeals = angularMath.getIntegerRandomRange(0, 50);
    if (!this.amountOfDeals) {
      this.persent = 0;
      this.profit = 0;
      result = 0;
      return;
    }
    result = angularMath.getIntegerRandomRange(0, 100);
    this.profit = angularMath.getIntegerRandomRange(0, 2000);
    const id = setInterval(() => {
      if (this.persent >= result) {
        clearInterval(id);
        result = 0;
        return;
      }
      this.persent++;
    }, 20);
  }
}
