import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HoverDirective } from './hover.directive';
import { HighscoreComponent } from './highscore/highscore.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HoverDirective,
    HighscoreComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
