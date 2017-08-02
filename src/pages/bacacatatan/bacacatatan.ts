import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the Bacacatatan page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-bacacatatan',
 	templateUrl: 'bacacatatan.html',
 })
 export class Bacacatatan {
 	name:any;
 	peristiwa:any;
 	tanggal:any;
 	jam:any;
 	photo:any;
 	fotosiswa:any;
 	namasiswa:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
 		this.name = navParams.get('name');
 		this.peristiwa = navParams.get('peristiwa');
 		this.tanggal = navParams.get('tanggal');
 		this.jam = navParams.get('jam');
 		this.photo = navParams.get('photo');
 	}

 	ionViewDidLoad() {

 		this.storage.get('fotosiswa').then((v)=>{
 			this.fotosiswa = v;
 		})
 		this.storage.get('namasiswa').then((w)=>{
 			this.namasiswa = w;
 		})
 		console.log('ionViewDidLoad Bacacatatan');
 	}

 }
