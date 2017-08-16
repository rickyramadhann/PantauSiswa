import { Component, ViewChild } from '@angular/core';
import { NavController,App,MenuController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Chart } from 'chart.js';
import * as moment from 'moment';


/**
 * Generated class for the Lihatnilaip page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-lihatnilaip',
 	templateUrl: 'lihatnilaip.html',
 })

 export class Lihatnilaip {
 	@ViewChild('lineCanvas') lineCanvas;
 	lineChart: any;
 	token:any;
 	url ="http://pantausiswa.xyz/api/ambilsiswa/nilaipengetahuan";
 	datanilaip :any;
 	nilaiku :any[]=[];
 	key:any;
 	namamatpel:any;
 	fotoguru:any;
 	namaguru:any;
 	labelpertemuan:any[]=[];
 	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public app:App, public menu:MenuController, public storage : Storage) {
 		this.namamatpel = navParams.get("nama");
 		this.fotoguru = navParams.get("foto");
 		this.namaguru = navParams.get("name");
 		console.log(this.namaguru);
 		this.loadNilaip();
 		
 	}

 	loadNilaip(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.datanilaip = datas[this.namamatpel];

 				let x =0;
 				for(let i =this.datanilaip.length-1; i>=0;i--){

 					if(this.datanilaip[i].kategori ==='testertulis'){
 						this.datanilaip[i].kategori ='tes tertulis';
 					}

 					else if(this.datanilaip[i].kategori ==='teslisan'){
 						this.datanilaip[i].kategori ='tes lisan';
 					}


 					else if(this.datanilaip[i].kategori ==='uas'){
 						this.datanilaip[i].kategori ='penilaian akhir';
 					}
 					
 					this.datanilaip[i].tanggal=moment(this.datanilaip[i].tanggal).locale('id').format('LL');
 					this.datanilaip[i].jam=moment(this.datanilaip[i].jam,"HH:mm:ss").format('hh:mm');
 					if(this.datanilaip[i].kategori == "uas"){

 						console.log("gak masuk chart")
 					}
 					
 					else{
 						x = x+1;
 						this.labelpertemuan.push("P-" + x);
 						//console.log(this.labelpertemuan);
 						this.nilaiku.push(this.datanilaip[i].nilai);	
 					}
 					//console.log(this.nilaiku);	
 				}
 				this.callChart();
 				
 			})
 		})
 	}


 	callChart(){

 		

 		this.lineChart = new Chart(this.lineCanvas.nativeElement, {

 			type: 'line',
 			data: {
 				labels: this.labelpertemuan,
 				datasets: [
 				{
 					label: "Grafik Penilaian Pengetahuan",
 					fill: false,
 					lineTension: 0.1,
 					backgroundColor: "rgba(75,192,192,0.4)",
 					borderColor: "rgba(75,192,192,1)",
 					borderCapStyle: 'butt',
 					borderDash: [],
 					borderDashOffset: 0.0,
 					borderJoinStyle: 'miter',
 					pointBorderColor: "rgba(75,192,192,1)",
 					pointBackgroundColor: "#fff",
 					pointBorderWidth: 1,
 					pointHoverRadius: 5,
 					pointHoverBackgroundColor: "rgba(75,192,192,1)",
 					pointHoverBorderColor: "rgba(220,220,220,1)",
 					pointHoverBorderWidth: 2,
 					pointRadius: 4,
 					pointHitRadius: 20,
 					data: this.nilaiku,
 					spanGaps: false,
 				}
 				]
 			}

 		});
 	}




 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Lihatnilaip');
 		
 	}

 }
