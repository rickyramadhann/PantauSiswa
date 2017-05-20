import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lihatnilaik } from './lihatnilaik';

@NgModule({
  declarations: [
    Lihatnilaik,
  ],
  imports: [
    IonicPageModule.forChild(Lihatnilaik),
  ],
  exports: [
    Lihatnilaik
  ]
})
export class LihatnilaikModule {}
