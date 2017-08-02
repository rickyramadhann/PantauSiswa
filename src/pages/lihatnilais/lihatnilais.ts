import { Component } from '@angular/core';
import { NavController,App,MenuController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Bacanilais } from '../bacanilais/bacanilais';

/**
 * Generated class for the Lihatnilais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-lihatnilais',
 	templateUrl: 'lihatnilais.html',
 })
 export class Lihatnilais {
 	token:any;
 	url ="http://pantausiswa.xyz/api/ambilsiswa/nilaisikap";
 	datanilais :any;
 	key:any;
 	namamatpel:any;
 	fotoguru:any;
 	namaguru:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public app:App, public menu:MenuController, public storage : Storage) {

 		this.namamatpel = navParams.get("nama");
 		this.fotoguru = navParams.get("foto");
 		this.namaguru = navParams.get("name");
 		console.log(this.namaguru);
 		this.loadNilais();
 	}

 	loadNilais(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.datanilais = datas[this.namamatpel];
 				


 			})
 		})
 	}

 	kebacanilais(data){
 		console.log(data);
 		this.navCtrl.push(Bacanilais, data);

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Lihatnilais');
 	}

 }
