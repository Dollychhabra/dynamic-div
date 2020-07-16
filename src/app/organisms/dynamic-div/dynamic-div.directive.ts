import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicDiv]',
})
export class DynamicDivDirective implements OnInit {
  value: number;
  size: number = 16;
  count: number = 16;
  num: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    for (let i = 1; i <= this.size; i++) {
      this.showDivs(i);
      this.renderer.addClass(this.el.nativeElement, 'd-flex');
      this.renderer.addClass(this.el.nativeElement, 'flex-wrap');
    }
    let that = this;
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
        that.num = that.count + 1;
        that.count = that.count + 4;
        for (let i = that.num; i <= that.count; i++) {
          that.showDivs(i);
        }
      }
    };
  }

  showDivs(i) {
    const div = this.renderer.createElement('div');
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText('Click' + ' ' + i);
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(div, button);
    this.renderer.appendChild(this.el.nativeElement, div);
    let divs = this.el.nativeElement.querySelectorAll('div');

    for (let i = 0; i < divs.length; i++) {
      this.renderer.addClass(divs[i], 'content-inside');
    }
    button.addEventListener('click', () => this.showAlert(i));
  }

  ngOnInit() {}

  showAlert(i) {
    alert('Button' + ' ' + i + ' ' + 'clicked');
  }
}
