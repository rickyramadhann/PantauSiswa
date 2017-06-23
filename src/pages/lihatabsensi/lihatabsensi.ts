import { Component } from '@angular/core';
import { NavController,App,MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'page-lihatabsensi',
	templateUrl: 'lihatabsensi.html',
})
export class Lihatabsensi {
	token:any;
	url ="http://pantausiswa.xyz/api/ambilsiswa/absensi";
	dataabsensi :any;
	key:any;
	matpel:any;
	constructor(public navCtrl: NavController, public http:Http, public app:App, public menu:MenuController, public storage : Storage) {
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
				this.dataabsensi = datas;
				this.key = Object.keys(this.dataabsensi);
				console.log(this.key);
				console.log(this.dataabsensi);
			})
		})
	}

	
	ionViewDidEnter(){
		this.menu.swipeEnable(true,'menu1');
	}

	

}
