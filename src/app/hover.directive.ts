import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  mouseenter() {
    this.el.nativeElement.style.background = "white";
  }
  @HostListener("mouseleave")
  mouseleave() {
    this.el.nativeElement.style.background = "transparent";
  }
}
