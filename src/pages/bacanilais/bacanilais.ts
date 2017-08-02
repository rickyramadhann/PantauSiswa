import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage' ;
import * as moment from 'moment';


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
 	fotosiswa:any;
 	namasiswa:any;
 	created_at:any;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage ) {
 		this.namamatpel = navParams.get("namamatpel");
 		this.fotoguru = navParams.get("fotoguru");
 		this.namaguru = navParams.get("namaguru");
 		this.kategori = navParams.get("kategori");
 		this.nilai = navParams.get("nilai");
 		this.keterangan = navParams.get("keterangan");
 		this.created_at = navParams.get("created_at");
 		this.created_at = moment(this.created_at).locale('id').format('LLLL')
 	}

 	ionViewDidLoad() {
 		this.storage.get('fotosiswa').then((v)=>{
 			this.fotosiswa = v;
 		})
 		this.storage.get('namasiswa').then((w)=>{
 			this.namasiswa = w;
 			
 		})
 		console.log('ionViewDidLoad Bacanilais');

 	}

 }
