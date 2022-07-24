import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintingComponent } from './printing.component';
import { ModelDisplayComponent } from './model-display/model-display.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    PrintingComponent,
    ModelDisplayComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PrintingModule { }
