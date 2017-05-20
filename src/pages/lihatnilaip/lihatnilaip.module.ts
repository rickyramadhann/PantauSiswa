import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lihatnilaip } from './lihatnilaip';

@NgModule({
  declarations: [
    Lihatnilaip,
  ],
  imports: [
    IonicPageModule.forChild(Lihatnilaip),
  ],
  exports: [
    Lihatnilaip
  ]
})
export class LihatnilaipModule {}
