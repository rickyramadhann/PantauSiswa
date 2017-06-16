import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bacapengumuman } from './bacapengumuman';

@NgModule({
  declarations: [
    Bacapengumuman,
  ],
  imports: [
    IonicPageModule.forChild(Bacapengumuman),
  ],
  exports: [
    Bacapengumuman
  ]
})
export class BacapengumumanModule {}
