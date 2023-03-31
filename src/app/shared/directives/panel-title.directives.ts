import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Client } from '../models/client.model';

@Directive({
  selector: '[panelTitle]'
})
export class PanelTitleDirective {
  // @Input() client: Client;
  constructor(private el: ElementRef) {
    // console.log(this.client)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}