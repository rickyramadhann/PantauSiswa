import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bacaberita } from './bacaberita';

@NgModule({
  declarations: [
    Bacaberita,
  ],
  imports: [
    IonicPageModule.forChild(Bacaberita),
  ],
  exports: [
    Bacaberita
  ]
})
export class BacaberitaModule {}
