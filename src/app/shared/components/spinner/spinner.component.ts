import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() diameter: number = 100;
  @Input() overlay: boolean = true;
  @Input() color: string;
  constructor() { }

}
