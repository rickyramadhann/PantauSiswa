import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the Tulispesan page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tulispesan',
  templateUrl: 'tulispesan.html',
})
export class Tulispesan {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public menu:MenuController,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tulispesan');
  }


   ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu1');
  }

  kirim(){
  	let confirm = this.alertCtrl.create({
      title: 'Konfirmasi',
      message: 'Apakah anda yakin ingin mengirimkan pesan ini?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            this.navCtrl.setRoot(TabsPage);
          }
        }
      ]
    });
    confirm.present();

  }

}
