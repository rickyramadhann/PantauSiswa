import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bacanilais } from './bacanilais';

@NgModule({
  declarations: [
    Bacanilais,
  ],
  imports: [
    IonicPageModule.forChild(Bacanilais),
  ],
  exports: [
    Bacanilais
  ]
})
export class BacanilaisModule {}
