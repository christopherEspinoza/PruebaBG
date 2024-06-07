import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBgComponent } from './button-bg/button-bg.component';
import { CardBgComponent } from './card-bg/card-bg.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ButtonBgComponent,
    CardBgComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    ButtonBgComponent,
    CardBgComponent
  ]
})
export class CustomComponentsModule { }
