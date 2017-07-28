import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

/**
 * Generated class for the Tugas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-tugas',
 	templateUrl: 'tugas.html',
 })
 export class Tugas {
 	token:any;
 	url ="http://pantausiswa.xyz/api/ambilsiswa/tugas";
 	datatugas :any;
 	key:any;
 	namamatpel:any;
 	fotoguru:any;
 	namaguru:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http,public storage:Storage) {
 		this.namamatpel = navParams.get("nama");
 		this.fotoguru = navParams.get("foto");
 		this.namaguru = navParams.get("name");
 		console.log(this.namaguru);
 		this.loadTugas();

 	}


 	loadTugas(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.datatugas = datas[this.namamatpel];
 				for(let i =this.datatugas.length-1; i>=0;i--){
 					this.datatugas[i].tanggal=moment(this.datatugas[i].tanggal).format('l');
 				}
 				
 			})
 		})
 	}

 	ionViewDidLoad() {
 		//console.log('ionViewDidLoad Tugas');
 	}

 }
