import { Component } from '@angular/core';
import { NavController,MenuController,App } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Tulispesan } from '../tulispesan/tulispesan';
@Component({
  selector: 'page-pesan',
  templateUrl: 'pesan.html'
})
export class PesanPage {

  constructor(public navCtrl: NavController,public app:App, public menu:MenuController) {

  }

   kenotifikasi(){
    this.app.getRootNav().push(Notifikasi);
  
  }

  ketulispesan(){
    this.app.getRootNav().push(Tulispesan);
  
  }


  ionViewDidEnter(){
  this.menu.swipeEnable(true,'menu1');
  }
}
