import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'button-bg',
  templateUrl: './button-bg.component.html',
  styleUrl: './button-bg.component.css'
})
export class ButtonBgComponent {

  @Input() state!: string
  @Input() text!: string
  @Output() onClickEvent = new EventEmitter<any>();

  public ButtonBgComponent(){

  }
}
