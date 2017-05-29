import { Component } from '@angular/core';
import { NavController,MenuController,App } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Bacaberita } from '../bacaberita/bacaberita';
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html'
})
export class BeritaPage {

  databerita:any;
  constructor(public navCtrl: NavController,public app:App, public menu:MenuController) {

  }

  
  
   kenotifikasi(){
    this.app.getRootNav().push(Notifikasi);
  
  }

  kebacaberita(){
    this.app.getRootNav().push(Bacaberita);
  
  }

  ionViewDidEnter(){
  this.menu.swipeEnable(true,'menu1');
  }

}
