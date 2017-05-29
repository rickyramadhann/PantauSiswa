import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Historybk } from './historybk';

@NgModule({
  declarations: [
    Historybk,
  ],
  imports: [
    IonicPageModule.forChild(Historybk),
  ],
  exports: [
    Historybk
  ]
})
export class HistorybkModule {}
