import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, OnChanges {
  displayMode = 1;
  @Input() type: string;
  @Input() link: string;
  @Input() icon: string;
  @Input() size: string;
  @Input() buttonText: string;
  @Input() textSize: string;
  @Input() textColor: string;
  @Input() backgroundColor: string;
  @Input() class: string;
  @Input() classname: string;

  @Output('parentFunc') parentFunc: EventEmitter<any> = new EventEmitter();

  @Output() click = new EventEmitter();

  iconClassName: string;
  sizeClassName: string;
  textSizeClassName: string;
  textColorClassName: string;
  backgroundColorClassName: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    switch (this.icon) {
      case 'grid':
        this.iconClassName = 'fa fa-th';
        break;
      case 'list':
        this.iconClassName = 'fa fa-list';
        break;
      default:
        this.iconClassName = null;
    }

    this.sizeClassName = this.size ? 'size-' + this.size : 'size-md';
    this.textSizeClassName = this.textSize
      ? 'text-size-' + this.textSize
      : 'text-size-md';
    this.textColorClassName = this.textColor
      ? 'text-color-' + this.textColor
      : 'text-gray';
    this.backgroundColorClassName = this.backgroundColor
      ? 'background-color-' + this.backgroundColor
      : 'background-color-transparent';
  }

  onClick() {
    this.parentFunc.emit();
  }
}
