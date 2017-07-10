import { Component } from '@angular/core';
import { NavController,App,MenuController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the Lihatnilaik page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-lihatnilaik',
 	templateUrl: 'lihatnilaik.html',
 })
 export class Lihatnilaik {

 	token:any;
 	url ="http://pantausiswa.xyz/api/ambilsiswa/nilaiketerampilan";
 	datanilaik :any;
 	key:any;
 	namamatpel:any;
 	fotoguru:any;
 	namaguru:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public app:App, public menu:MenuController, public storage : Storage) {

 		this.namamatpel = navParams.get("nama");
 		this.fotoguru = navParams.get("foto");
 		this.namaguru = navParams.get("name");
 		console.log(this.namaguru);
 		this.loadNilaik();
 	}

 	loadNilaik(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.datanilaik = datas[this.namamatpel];


 			})
 		})
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Lihatnilaik');
 	}

 }
