import {Component, OnInit, Input, Output, EventEmitter, Injectable} from '@angular/core';
import {CharactersComponent} from '../characters/characters.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
@Injectable()
export class PopupComponent implements OnInit {
  @Input() selectedCharackter: any;

  constructor(private CharactersComp: CharactersComponent) {
  }

  closePopup() {
    this.CharactersComp.closeModal();
  }

  stopEvent(event) {
    event.stopPropagation();
  }

  ngOnInit() {
  }

}
