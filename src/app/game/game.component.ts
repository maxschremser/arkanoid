import {Component, OnInit} from '@angular/core';
import {fromEvent} from "rxjs";
import {filter} from "rxjs/operators";

export enum KeyCode { LEFT = "ArrowLeft", RIGHT = "ArrowRight", SPACE = "Space"}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  left = false;
  right = false;
  shoot = false;

  constructor() {
  }

  ngOnInit() {
    fromEvent(document, 'keydown').pipe(filter((evt: KeyboardEvent) => {
      return (evt.code === KeyCode.LEFT || evt.code === KeyCode.RIGHT);
    })).subscribe((evt: KeyboardEvent) => {
      switch (evt.code) {
        case KeyCode.LEFT:
          this.left = true;
          break;
        case KeyCode.RIGHT:
          this.right = true;
          break;
      }
    });

    fromEvent(document, 'keyup').pipe(filter((evt: KeyboardEvent) => {
      return (evt.code === KeyCode.LEFT || evt.code === KeyCode.RIGHT);
    })).subscribe((evt: KeyboardEvent) => {
      switch (evt.code) {
        case KeyCode.LEFT:
          this.left = false;
          break;
        case KeyCode.RIGHT:
          this.right = false;
          break;
      }
    });

    fromEvent(document, 'keypress').pipe(filter((evt: KeyboardEvent) => {
      return evt.code === KeyCode.SPACE
    })).subscribe((evt: KeyboardEvent) => {
      this.shoot = true;
    });
  }

}
