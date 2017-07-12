import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bacacatatan } from './bacacatatan';

@NgModule({
  declarations: [
    Bacacatatan,
  ],
  imports: [
    IonicPageModule.forChild(Bacacatatan),
  ],
  exports: [
    Bacacatatan
  ]
})
export class BacacatatanModule {}
