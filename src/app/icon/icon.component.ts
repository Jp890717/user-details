import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() color: string;
  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
