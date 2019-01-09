import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent {
  @Input() name: String;

  constructor() {}

  get absUrl() {
    return window.location.href;
  }
}
