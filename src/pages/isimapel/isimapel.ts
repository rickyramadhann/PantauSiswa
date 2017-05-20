import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Lihatnilaik } from '../lihatnilaik/lihatnilaik';
import { Lihatnilaip } from '../lihatnilaip/lihatnilaip';
import { Lihatnilais } from '../lihatnilais/lihatnilais';
import { Lihatabsensi } from '../lihatabsensi/lihatabsensi';
import { Tugas } from '../tugas/tugas';
/**
 * Generated class for the Isimapel page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-isimapel',
  templateUrl: 'isimapel.html',
})
export class Isimapel {

  pages:Array<{title: string, component:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController) {
    this.pages = [
      {title:'Nilai Pengetahuan', component:Lihatnilaip},
      {title:'Nilai Keterampilan', component:Lihatnilaik},
      {title:'Nilai Sikap', component:Lihatnilais},
      {title:'Absensi', component:Lihatabsensi},
      {title:'Tugas', component:Tugas}

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Isimapel');
  }

  openPage(page){
      this.navCtrl.push(page.component);
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu1');
  }

}
