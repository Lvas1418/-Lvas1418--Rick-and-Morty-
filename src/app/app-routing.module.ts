import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RickAndMortyComponent} from "./rick-and-morty/rick-and-morty.component";
import {MyProfitComponent} from "./my-profit/my-profit.component";
import {CharactersComponent} from "./characters/characters.component";

const routes: Routes = [
  {path: '', component: RickAndMortyComponent},
  {path: 'my-profit', component: MyProfitComponent},
  {path: 'characters', component: CharactersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
