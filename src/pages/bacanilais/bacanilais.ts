import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Bacanilais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-bacanilais',
 	templateUrl: 'bacanilais.html',
 })
 export class Bacanilais {

 	public namamatpel:any;
 	public namaguru:any;
 	public fotoguru:any;
 	public kategori:any;
 	public keterangan:any;
 	public nilai:any;

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.namamatpel = navParams.get("namamatpel");
 		this.fotoguru = navParams.get("fotoguru");
 		this.namaguru = navParams.get("namaguru");
 		this.kategori = navParams.get("kategori");
 		this.nilai = navParams.get("nilai");
 		this.keterangan = navParams.get("keterangan");
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Bacanilais');
 	}

 }
