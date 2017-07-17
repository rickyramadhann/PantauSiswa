import { Component } from '@angular/core';
import { NavController, NavParams,MenuController,Platform} from 'ionic-angular';
//import { PesanPage } from '../pesan/pesan';
import { BeritaPage } from '../berita/berita';
import { Pengumuman } from '../pengumuman/pengumuman';
import { Historybk } from '../historybk/historybk';
import { AppMinimize } from '@ionic-native/app-minimize';
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
  constructor(public platform: Platform, public appMinimize: AppMinimize,public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
  }


  ionViewDidEnter(){
    this.menu.swipeEnable(true,'menu1');
  }
}
