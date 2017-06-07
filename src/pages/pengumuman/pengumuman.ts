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

  data:Array<{judul:string, content:string, waktu:string}>;
  constructor(public navCtrl: NavController,public app:App,  public navParams: NavParams, public menu:MenuController) {
    this.data=[
      {judul:'Judul 1', content:'Content pengumuman',waktu:'03.20pm'},
      {judul:'Judul 2', content:'Content pengumuman',waktu:'03.20pm'},
      {judul:'Judul 3', content:'Content pengumuman',waktu:'03.20pm'},
      {judul:'Judul 4', content:'Content pengumuman',waktu:'03.20pm'},
      {judul:'Judul 5', content:'Content pengumuman',waktu:'03.20pm'},
      {judul:'Judul 6', content:'Content pengumuman',waktu:'03.20pm'},
      {judul:'Judul 7', content:'Content pengumuman',waktu:'03.20pm'},
      {judul:'Judul 8', content:'Content pengumuman',waktu:'03.20pm'}
    ]
  
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
