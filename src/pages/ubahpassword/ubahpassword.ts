import { Component } from '@angular/core';
import { NavController, NavParams,MenuController, LoadingController, AlertController} from 'ionic-angular';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Ubahpassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-ubahpassword',
 	templateUrl: 'ubahpassword.html',
 })
 export class Ubahpassword {
 	public user = {
 		password_lama: '',
 		password: '',

 	};
 	public type= "password";

 	public showPass = false;
 	token:any;
 	url="http://pantausiswa.xyz/api/ubahpassword";
 	constructor(public navCtrl: NavController,
 		public navParams: NavParams, public menu:MenuController,
 		public http:Http, public loading: LoadingController,
 		public alert:AlertController, public storage: Storage
 		) {
 	}


 	ubahpassword(){
 		if(this.user.password_lama ===''||this.user.password===''){
 			let alert = this.alert.create({
 				title: 'warning',
 				subTitle: 'Kata sandi tidak boleh kosong',
 				buttons: ['ok']
 			});
 			alert.present();
 		}

 		else{
 			let loader = this.loading.create({
 				content: 'Mohon tunggu..!!',
 				//duration: 1000
 			});
 			loader.present().then(()=>{
 				this.storage.get('token').then(token=>{
 					this.token=token;
 					let header = new Headers();
 					header.append('Content-Type', 'Application/json');
 					header.append('Accept','Application/json');
 					header.append('Authorization', 'Bearer '+ this.token);
 					let options = new RequestOptions({headers:header});
 					console.log(this.user)
 					this.http.post(this.url,JSON.stringify(this.user),options).map(res => res.json())
 					.subscribe(data => {
 						let alert = this.alert.create({
 							title: 'Sukses',
 							subTitle: 'Kata sandi berhasil diubah',
 							buttons: ['ok']
 						});
 						console.log("berhasil");
 						alert.present();
 						loader.dismiss();
 					},error=> {
 						let alert = this.alert.create({
 							title: 'warning',
 							subTitle: 'Kata sandi tidak dapat diubah',
 							buttons: ['ok']
 						});
 						alert.present();
 						loader.dismiss();
 					});
 				});
 			}); 
 		}
 	}


 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Ubahpassword');
 	}


 	showPassword()
 	{
 		this.showPass = !this.showPass;
 		if (this.showPass){
 			this.type = "text";
 		}
 		else {
 			this.type = "password";
 		}
 	}

 }
