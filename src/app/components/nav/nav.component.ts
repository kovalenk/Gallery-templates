import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  active: null;
  subActive: null;
  menuToggle = false;
  itemsDelay = false;
  // dropdownToggle = false;
  navGroup = [
    {
      title: 'Slider',
      dropdownToggle: false,
      link: '',
    },
    {
      title: 'Galleries',
      dropdownToggle: false,
      dropdown: [
        {
          title: 'Masonry - style 1',
          link: '/grid-1',
        },
        {
          title: 'Masonry - style 2',
          link: '/grid-2',
        },
        {
          title: 'Masonry - style 3',
          link: '/grid-3',
        },
        {
          title: 'Masonry - style 4',
          link: '/grid-4',
        },
        {
          title: 'Grid - style 1',
          link: 'grid-5',
        },
        {
          title: 'Grid - style 2',
          link: 'grid-6',
        },
        {
          title: 'Vertical list',
          link: '',
        },
        {
          title: 'Password protected',
          link: '',
        },
        {
          title: 'Photo proofing',
          link: '',
        }
      ],
      link: '',
    },
    {
      title: 'Albums',
      dropdownToggle: false,
      link: '',
    },
    {
      title: 'About me',
      link: '',
    },
    {
      title: 'contact us',
      dropdownToggle: false,
      link: '',
    },
  ];

  constructor() {
    this.menuToggle = false;
  }

  ngOnInit() {
  }

  setActive(index){
    if(this.active == index){
      this.active = null;
    }else {
      this.active = index;
    }
    this.subActive = null;
  }

  openMenu(status){
    this.menuToggle = !status;

    if(status === false){
      setTimeout(() => {
        this.itemsDelay = !status;
      }, 700);
    }
    else{
      this.itemsDelay = !status;
    }

  }

}
