import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lihatnilais } from './lihatnilais';

@NgModule({
  declarations: [
    Lihatnilais,
  ],
  imports: [
    IonicPageModule.forChild(Lihatnilais),
  ],
  exports: [
    Lihatnilais
  ]
})
export class LihatnilaisModule {}
