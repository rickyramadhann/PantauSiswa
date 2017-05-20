import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Notifikasi } from './notifikasi';

@NgModule({
  declarations: [
    Notifikasi,
  ],
  imports: [
    IonicPageModule.forChild(Notifikasi),
  ],
  exports: [
    Notifikasi
  ]
})
export class NotifikasiModule {}
