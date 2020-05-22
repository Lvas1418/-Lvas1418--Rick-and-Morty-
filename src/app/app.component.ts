import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemHome = {};
  itemCharacters = {};
  itemProfit = {};
  menuColor = {color: '#ff950b'};

  selectMenu(event) {
    this.itemHome = {};
    this.itemCharacters = {};
    this.itemProfit = {};
    switch (event.target.id) {
      case 'Home':
        this.itemHome = this.menuColor;
        break;
      case 'Characters':
        this.itemCharacters = this.menuColor;
        break;
      case 'Profit':
        this.itemProfit = this.menuColor;
        break;
    }
  }
}
