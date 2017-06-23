import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Jadwal } from './jadwal';

@NgModule({
  declarations: [
    Jadwal,
  ],
  imports: [
    IonicPageModule.forChild(Jadwal),
  ],
  exports: [
    Jadwal
  ]
})
export class JadwalModule {}
