import { Component } from '@angular/core';
import { NavController,App,MenuController } from 'ionic-angular';
import { Isimapel } from '../isimapel/isimapel';
import { Notifikasi } from '../notifikasi/notifikasi';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app:App, public menu:MenuController) {

  }

  keisimapel(){
    this.app.getRootNav().push(Isimapel);

  }


  kenotifikasi(){
    this.app.getRootNav().push(Notifikasi);
  
  }

  ionViewDidEnter(){
  this.menu.swipeEnable(true,'menu1');
  }
}
