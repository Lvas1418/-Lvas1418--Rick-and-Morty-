import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharactersModelModule} from '../characters-model/characters-model.module';

@Injectable()
export class CharactersService {

  constructor(private http: HttpClient) {
  }

  charactersAndDescription: CharactersModelModule;

  getData() {
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }
}
