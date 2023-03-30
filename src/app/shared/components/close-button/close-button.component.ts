import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent implements OnInit {
  @Input() class: string;
  constructor() { }

  ngOnInit(): void {
  }

}
