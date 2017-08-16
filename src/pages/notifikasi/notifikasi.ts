import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,Slides, Platform, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';



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
 	urlnotifnilai ="http://pantausiswa.xyz/api/ambilsiswa/notifnilai";
 	notifabsensi :any;
 	notiftugas :any;
 	notifnilai :any;
 	key:any;
 	jam:any;
 	absjam:any[]=[]
 	abstanggal:any[]=[]
 	jamm:any;

 	
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
 		this.getdatanilai();
 		this.getdataabsensi();
 		this.getdatatugas();
 	}

 	doRefresh(refresher) {
 		console.log('Begin async operation', refresher);
 		this.ionViewDidLoad();
 		setTimeout(() => {
 			console.log('Async operation has ended');
 			refresher.complete();
 		}, 2000);
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
 				
 				for (let i=0;i<this.notifabsensi.length;i++){
 					this.absjam[i]=moment(this.notifabsensi[i].created_at).locale('id').format('LT');
 					this.abstanggal[i]=moment(this.notifabsensi[i].created_at).locale('id').format('LL');
 					
 				}

 				
 			})
 		})
 	}

 	getdatanilai(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.urlnotifnilai,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				//console.log(datas);
 				this.notifnilai = datas;
 				for(let i =this.notifnilai.length-1; i>=0;i--){
 					if(this.notifnilai[i].kategori ==='testertulis'){
 						this.notifnilai[i].kategori ='tes tertulis';
 					}

 					else if(this.notifnilai[i].kategori ==='teslisan'){
 						this.notifnilai[i].kategori ='tes lisan';
 					}


 					else if(this.notifnilai[i].kategori ==='uas'){
 						this.notifnilai[i].kategori ='penilaian akhir';
 					}

 					this.notifnilai[i].tanggal=moment(this.notifnilai[i].tanggal).format('LL');
 					this.abstanggal[i]=moment(this.notifnilai[i].created_at).locale('id').format('LL');
 					
 				}
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

 				for(let i =this.notiftugas.length-1; i>=0;i--){
 					this.abstanggal[i]=moment(this.notiftugas[i].created_at).locale('id').format('LL');
 					this.notiftugas[i].jam=moment(this.notiftugas[i].jam, "HH:mm:ss").format('hh:mm');
 				}
 				
 			})
 		})
 	}



 	ionViewDidEnter(){
 		this.menu.swipeEnable(false,'menu1');
 	}

 }
