import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,App} from 'ionic-angular';

import { Notifikasi } from '../notifikasi/notifikasi';
/**
 * Generated class for the Pengumuman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pengumuman',
  templateUrl: 'pengumuman.html',
})
export class Pengumuman {

  constructor(public navCtrl: NavController,public app:App,  public navParams: NavParams, public menu:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pengumuman');
  }
  
   kenotifikasi(){
    this.app.getRootNav().push(Notifikasi);
  
  }

  ionViewDidEnter(){
  this.menu.swipeEnable(true,'menu1');
  }
}
