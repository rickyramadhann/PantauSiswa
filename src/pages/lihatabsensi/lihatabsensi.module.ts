import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lihatabsensi } from './lihatabsensi';

@NgModule({
  declarations: [
    Lihatabsensi,
  ],
  imports: [
    IonicPageModule.forChild(Lihatabsensi),
  ],
  exports: [
    Lihatabsensi
  ]
})
export class LihatabsensiModule {}
