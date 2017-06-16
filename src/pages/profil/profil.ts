import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the Profil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-profil',
 	templateUrl: 'profil.html',
 })
 export class Profil {
 	token : any;
 	datasiswa:any;
 	url:any='http://pantausiswa.xyz/api/ambilsiswa/datasiswa';
 	key=[];
 	constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public http:Http) {
 		this.loadProfil();
 	}




 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Profil');
 	}

 	loadProfil(){
    this.storage.get('token').then(token=>{
      this.token=token;
       let header = new Headers();
       header.append('Content-Type', 'application/json');
       header.append('Accept','Application/json');
       header.append('Authorization', 'Bearer '+ this.token);
      this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
        this.datasiswa = datas;
        this.key = Object.keys(this.datasiswa);
        
        console.log(this.key);
      })
    })
  }
 }
