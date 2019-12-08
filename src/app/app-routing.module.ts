import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {GameComponent} from "./game/game.component";
import {HighscoreComponent} from "./highscore/highscore.component";


const routes: Routes = [
  {component: HighscoreComponent, path: "highscore"},
  {component: GameComponent, path: "game"},
  {component: StartComponent, path: "**"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
