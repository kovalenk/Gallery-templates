import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  menuToggle :any;
  // dropdownToggle = false;
  navGroup = [
    {
      title: 'Slider',
      dropdownToggle: false,
      dropdown: true,
      link: '',
    },
    {
      title: 'Galleries',
      dropdownToggle: false,
      dropdown: [
        {
          title: 'Masonry - style 1',
          link: 'wedding',
        },
        {
          title: 'Masonry - style 2',
          link: '',
        },
        {
          title: 'Masonry - style 3',
          link: '',
        },
        {
          title: 'Masonry - style 4',
          link: '',
        },
        {
          title: 'Grid - style 1',
          link: '',
        },
        {
          title: 'Grid - style 2',
          link: '',
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
      dropdown: true,
      link: '',
    },
    {
      title: 'About me',
      link: '',
    },
    {
      title: 'contact us',
      dropdownToggle: false,
      dropdown: true,
      link: '',
    },
  ];

  constructor() {
    this.menuToggle = false;
  }

  ngOnInit() {
  }

}
