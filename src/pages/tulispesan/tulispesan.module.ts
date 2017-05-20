import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tulispesan } from './tulispesan';

@NgModule({
  declarations: [
    Tulispesan,
  ],
  imports: [
    IonicPageModule.forChild(Tulispesan),
  ],
  exports: [
    Tulispesan
  ]
})
export class TulispesanModule {}
