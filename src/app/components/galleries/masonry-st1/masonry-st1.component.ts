import {Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-masonry-st1',
  templateUrl: './masonry-st1.component.html',
  styleUrls: ['./masonry-st1.component.scss']
})
export class MasonrySt1Component implements OnInit {

  formulaX: number;
  formulaY: number;
  movementInt = 5;
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

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {
    if (this.inside) {
      console.log(event);
      this.formulaX = (event.offsetX - event.layerX) / this.movementInt;
      this.formulaY = (event.offsetY - event.layerY) / this.movementInt;
      event.target.style.transform = "scale(1.3, 1.3) translate(" + this.formulaX + "px, " + this.formulaY + "px)";
    }
  }

  onMouseLeave(e) {
    this.inside = false;
    e.srcElement.firstChild.style.transform = "";
  }
}
