import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,Slides, Platform, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


/**
 * Generated class for the Notifikasi page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-notifikasi',
 	templateUrl: 'notifikasi.html',
 })
 export class Notifikasi {
 	@ViewChild('pageSlider') pageSlider: Slides;
 	@ViewChild('lineCanvas') lineCanvas;

 	notif: any = 0;
 	lineChart: any;
 	public nilaiku:any[]=[];
 	token:any;
 	urlnotifabsensi ="http://pantausiswa.xyz/api/ambilsiswa/notifabsensi";
 	urlnotiftugas ="http://pantausiswa.xyz/api/ambilsiswa/notiftugas";
 	urlnotifnilaip ="http://pantausiswa.xyz/api/ambilsiswa/notifnilaipengetahuan";
 	notifabsensi :any;
 	notiftugas :any;
 	notifnilaip :any;
 	key:any;
 	


 	
 	constructor(public navCtrl: NavController,public http:Http, public navParams: NavParams,
 		public menu:MenuController, public storage:Storage,public platform:Platform, public loading:LoadingController) {
 	
 		this.ionViewDidLoad();
 		
 		
 	}


 	selectTab(index) {
 		this.pageSlider.slideTo(index);
 	}
 	changeWillSlide($event) {
 		this.notif = $event._snapIndex.toString();
 	}

 	ionViewDidLoad() {
 		this.getdatanilaip();
 		this.getdataabsensi();
 		this.getdatatugas();
 	}



 	getdataabsensi(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.urlnotifabsensi,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.notifabsensi = datas;
 				
 			})
 		})
 	}

 	getdatanilaip(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.urlnotifnilaip,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.notifnilaip = datas;
 				
 			})
 		})
 	}

 	getdatatugas(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.urlnotiftugas,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.notiftugas = datas;
 				
 			})
 		})
 	}



 	ionViewDidEnter(){
 		this.menu.swipeEnable(false,'menu1');
 	}

 }
