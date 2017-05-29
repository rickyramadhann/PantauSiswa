import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Matpel } from './matpel';

@NgModule({
  declarations: [
    Matpel,
  ],
  imports: [
    IonicPageModule.forChild(Matpel),
  ],
  exports: [
    Matpel
  ]
})
export class MatpelModule {}
