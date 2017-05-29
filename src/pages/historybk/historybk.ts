import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,App } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';

/**
 * Generated class for the Historybk page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-historybk',
 	templateUrl: 'historybk.html',
 })
 export class Historybk {

 	constructor(public navCtrl: NavController, public navParams: NavParams,
 		public app: App, public menu: MenuController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Historybk');
 	}

 	kenotifikasi(){
 		this.app.getRootNav().push(Notifikasi);

 	}
 	ionViewDidEnter(){
 		this.menu.swipeEnable(true,'menu1');
 	}

 }
