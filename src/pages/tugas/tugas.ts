import { Component } from '@angular/core';
import { NavController,App,MenuController,NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
 	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http,public storage:Storage) {

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
 				this.datatugas = datas.tugas;
 				this.key = Object.keys(this.datatugas);
 				console.log(this.key);
 				console.log(this.datatugas);
 			})
 		})
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Tugas');
 	}

 }
