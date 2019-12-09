import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, interval} from "rxjs";
import {filter} from "rxjs/operators";

export enum KeyCode { LEFT = "ArrowLeft", RIGHT = "ArrowRight", SPACE = "Space"}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChild("arkanoid", {static: true}) arkanoid: ElementRef;

  FPS = 30;
  x = (640 / 2) - 65;
  dX = 13;

  y = 450;

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

    interval(1000 / this.FPS).subscribe((d) => {
      console.log("l", this.arkanoid.nativeElement.clientLeft);
      if (this.left) {
        this.x -= this.dX;
        if (this.x <= 0) {
          this.x = 0;
        }
        this.arkanoid.nativeElement.style.left = `${this.x}px`;
      }

      if (this.right) {
        this.x += this.dX;
        if (this.x >= (640 - 65)) {
          this.x = 640 - 70;
        }
        this.arkanoid.nativeElement.style.left = `${this.x}px`;
      }
    });
  }


}
