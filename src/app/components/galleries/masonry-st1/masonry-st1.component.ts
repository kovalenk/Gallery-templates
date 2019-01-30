import {AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-masonry-st1',
  templateUrl: './masonry-st1.component.html',
  styleUrls: ['./masonry-st1.component.scss']
})
export class MasonrySt1Component implements OnInit, AfterViewInit {
  gradientTop: number;
  gradientLeft: number;
  movementX:number;
  movementY:number;
  movementInt = 1;
  inside = false;
  navGroup = [
    {
      src: 'photo_7.jpg',
      alt: '1',
    },
    {
      src: 'photo_2.jpg',
      alt: '2',
    },
    {
      src: 'photo_10.jpg',
      alt: '3',
    },
    {
      src: 'photo_3.jpg',
      alt: '4',
    },
    {
      src: 'photo_8.jpg',
      alt: '5',
    },
    {
      src: 'photo_4.jpg',
      alt: '6',
    },
    {
      src: 'photo_9.jpg',
      alt: '7',
    },
    {
      src: 'photo_5.jpg',
      alt: '8',
    },
    {
      src: 'photo_10.jpg',
      alt: '9',
    },
    {
      src: 'photo_6.jpg',
      alt: '',
    },
  ];

  @ViewChildren('myanchor') anchors: QueryList<any>;



  constructor(public el: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    // var fs = require('fs');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if(this.inside){
      console.log(event);
      this.gradientLeft = event.layerX;
      this.gradientTop = event.layerY;
      this.movementX = event.movementX + this.movementInt;
      this.movementY = event.movementY + this.movementInt;
    }
    // console.log(this.el.nativeElement.offsetLeft);
  }

  onMouseEnter(e){
    this.inside = true;
  }

  onMouseLeave(e){
    console.log(e);
    this.movementX = 0;
    this.movementY = 0;
    this.inside = false;
  }

  ngAfterViewInit(){
    this.anchors.map(i=>{ console.log(i); })
  }
}
