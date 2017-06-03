import { Component } from '@angular/core';
import { NavController, NavParams,MenuController} from 'ionic-angular';
//import { PesanPage } from '../pesan/pesan';
import { BeritaPage } from '../berita/berita';
import { Pengumuman } from '../pengumuman/pengumuman';
import { Historybk } from '../historybk/historybk';
//import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  //tab2Root = PesanPage;
  tab1Root = BeritaPage;
  tab2Root = Pengumuman;
  tab3Root = Historybk;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {

  }


  ionViewDidEnter(){
  this.menu.swipeEnable(true,'menu1');
  }
}
