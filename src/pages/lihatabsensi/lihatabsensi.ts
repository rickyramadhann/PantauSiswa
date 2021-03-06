import { Component,ViewChild } from '@angular/core';
import { NavController,App,MenuController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Chart } from 'chart.js';
import * as moment from 'moment'

@Component({
	selector: 'page-lihatabsensi',
	templateUrl: 'lihatabsensi.html',
})
export class Lihatabsensi {

	@ViewChild('doughnutCanvas') doughnutCanvas;
	doughnutChart: any;
	token:any;
	url ="http://pantausiswa.xyz/api/ambilsiswa/absensi";
	dataabsensi :any;
	key:any;
	namamatpel:any;
	fotoguru:any;
	namaguru:any;
	hadir = 0;
	izin = 0;
	sakit =0;
	alpha = 0;
	thadir =0;
	talpa=0;
	tizin=0;
	tsakit=0;
	t:any[]=[];
	bulan:any[]=[];
	absjam:any[]=[];
	absbulan:any[]=[];
	public bbulan:any;
	bulanc: string ="Agustus";
	
	constructor(public navCtrl: NavController,public navParams: NavParams, public http:Http, public app:App, public menu:MenuController, public storage : Storage) {
		this.namamatpel = navParams.get("nama");
		this.fotoguru = navParams.get("foto");
		this.namaguru = navParams.get("name");
		console.log(this.namaguru);
		this.loadAbsensi();
		
	}




	loadAbsensi(){
		this.storage.get('token').then(token=>{
			this.token=token;
			let header = new Headers();
			header.append('Content-Type', 'application/json');
			header.append('Accept','Application/json');
			header.append('Authorization', 'Bearer '+ this.token);
			this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
				console.log(datas);
				this.dataabsensi = datas[this.namamatpel];
				for(let i =0; i<this.dataabsensi.length;i++){
					this.absjam[i]=moment(this.dataabsensi[i].created_at).locale('id').format('LT');
					this.absbulan[i]=moment(this.dataabsensi[i].created_at).locale('id').format('LL');

					this.bulan.push(moment(this.dataabsensi[i].created_at).locale('id').format('MMMM'));
					this.bbulan = this.bulan[i];
					
					if(this.dataabsensi[i].keterangan === "hadir"){
						this.hadir= this.hadir +1;
					}
					else if(this.dataabsensi[i].keterangan==="sakit"){
						this.sakit = this.sakit +1;
					}
					else if (this.dataabsensi[i].keterangan ==='izin'){
						this.izin = this.izin +1;
					}
					else{
						this.alpha= this.alpha+1
					}
				}
				this.thadir=this.hadir;
				this.tsakit=this.sakit;
				this.tizin=this.izin;
				this.talpa=this.alpha;

				this.t.push(this.hadir);
				this.t.push(this.tsakit);
				this.t.push(this.tizin);
				this.t.push(this.talpa);
				this.callchart();

			})
		})
	}


	callchart(){
		this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

			type: 'doughnut',
			data: {
				labels: ["Hadir", "Sakit",  "Izin", "Alpha"],
				datasets: [{
					label: '# of Votes',
					data: this.t,
					backgroundColor: [
					"#268bc0",
					"#e9ad1c",
					"#12a386",
					"#f75f5a"
					],
					hoverBackgroundColor: [
					"#268bc0",
					"#e9ad1c",
					"#12a386",
					"#f75f5a"
					]
				}]
			},
			options:{
				tooltips: {
					callbacks: {
						label: function(tooltipItem, data) {
							var allData = data.datasets[tooltipItem.datasetIndex].data;
							var tooltipLabel = data.labels[tooltipItem.index];
							var tooltipData = allData[tooltipItem.index];
							var total = 0;
							for (var i in allData) {
								total += allData[i];
							}
							var tooltipPercentage = Math.round((tooltipData / total) * 100);
							return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
						}
					}
				}
			}

		});
	}
	
	ionViewDidEnter(){
		this.menu.swipeEnable(true,'menu1');
	}

	ionViewDidLoad(){
		
	}

	

}
