import {Component, OnInit} from '@angular/core';
import {CharactersModelModule} from '../characters-model/characters-model.module';
import {CharactersService} from '../characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharactersModelModule, CharactersService]
})
export class CharactersComponent implements OnInit {
  characters: any;
  character: any;
  isModalVisible: boolean = false;

  constructor(private listCharacters: CharactersService) {

  }

  ngOnInit() {
    this.listCharacters.getData().subscribe((data) => {
      this.characters = data['results'];
    });
  }

  public showDialog(charackter) {
    this.isModalVisible = true;
    this.character = charackter;
  }

  public closeModal() {
    this.isModalVisible = false;
  }

  descendingSorting(field) {
    this.sort(field, 1);
  }

  ascendingSorting(field) {
    this.sort(field, 0);
  }

  sort(field: any, flag: number) {

    let i;
    let j;
    (flag) ? [i, j] = [1, -1] : [i, j] = [-1, 1];
    this.characters.sort(function (a, b) {
      if (a[field] < b[field]) {
        return i;
      }
      if (a[field] > b[field]) {
        return j;
      }
      return 0;
    });
  }
}
