import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ubahpassword } from './ubahpassword';

@NgModule({
  declarations: [
    Ubahpassword,
  ],
  imports: [
    IonicPageModule.forChild(Ubahpassword),
  ],
  exports: [
    Ubahpassword
  ]
})
export class UbahpasswordModule {}
