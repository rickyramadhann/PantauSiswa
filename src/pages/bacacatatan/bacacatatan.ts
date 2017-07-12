import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.name = navParams.get('name');
 		this.peristiwa = navParams.get('peristiwa');
 		this.tanggal = navParams.get('tanggal');
 		this.jam = navParams.get('jam');
 		this.photo = navParams.get('photo');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Bacacatatan');
 	}

 }
