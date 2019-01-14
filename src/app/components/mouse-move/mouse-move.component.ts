import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-mouse-move',
  templateUrl: './mouse-move.component.html',
  styleUrls: ['./mouse-move.component.scss']
})
export class MouseMoveComponent implements OnInit {

  posX: number;
  posY: number;
  innerWidth: number;
  onScreen = false;

  constructor(public el: ElementRef<HTMLElement>) { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.onScreen = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.onScreen = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.innerWidth = window.innerWidth;
    this.posX = event.pageX - this.el.nativeElement.offsetLeft;
    this.posY = event.pageY - this.el.nativeElement.offsetTop;
  }
}
