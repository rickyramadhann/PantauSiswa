import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,App} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Bacacatatan } from '../bacacatatan/bacacatatan';
import * as moment from 'moment';

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
 	token : any;
 	datacatatan:any;
 	url:any='http://pantausiswa.xyz/api/ambilsiswa/catatanwali';
 	page:number=1;
 	key=[];
 	nama:any;
 	photo:any;

 	constructor(public navCtrl: NavController,public app:App,  public navParams: NavParams, public menu:MenuController, public storage:Storage,public http:Http) {
 		this.getcatatan();
 	}


 	getcatatan(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.datacatatan = datas;
 				this.nama  = this.datacatatan[0].name;
 				this.photo = this.datacatatan[0].photo;

 				for(let i =this.datacatatan.length-1; i>=0;i--){
 					
 					this.datacatatan[i].tanggal=moment(this.datacatatan[i].tanggal).format('l');
 				}
  			})
 		})
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Historybk');
 	}

 	kebacacatatan(data){
 		this.app.getRootNav().push(Bacacatatan,data);
 	}

 	kenotifikasi(){
 		this.app.getRootNav().push(Notifikasi);

 	}
 	ionViewDidEnter(){
 		this.menu.swipeEnable(true,'menu1');
 	}

 }
