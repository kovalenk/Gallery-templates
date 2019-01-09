import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  sliderGroup = [
    {
      name : 'bg1.jpg',
      alt:'Some slide'
    },
    {
      name : 'bg2.jpg',
      alt:'Some slide'
    },
    {
      name : 'bg3.jpg',
      alt:'Some slide'
    },
    {
      name : 'bg4.jpg',
      alt:'Some slide'
    },
    {
      name : 'bg5.jpg',
      alt:'Some slide'
    },
    {
      name : 'bg6.jpg',
      alt:'Some slide'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
