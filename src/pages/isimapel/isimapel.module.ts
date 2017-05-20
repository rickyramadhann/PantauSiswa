import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Isimapel } from './isimapel';

@NgModule({
  declarations: [
    Isimapel,
  ],
  imports: [
    IonicPageModule.forChild(Isimapel),
  ],
  exports: [
    Isimapel
  ]
})
export class IsimapelModule {}
