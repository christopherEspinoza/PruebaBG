import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-bg',
  templateUrl: './card-bg.component.html',
  styleUrl: './card-bg.component.css'
})
export class CardBgComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() withActions!: boolean;
}
