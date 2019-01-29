import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-masonry-st1',
  templateUrl: './masonry-st1.component.html',
  styleUrls: ['./masonry-st1.component.scss']
})
export class MasonrySt1Component implements OnInit {

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
      src: 'photo_1.jpg',
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

    // var fs = require('fs');

  }

}
