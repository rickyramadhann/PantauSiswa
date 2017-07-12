import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
   datasiswa = [];
   datakelas =[];
   url:any='http://pantausiswa.xyz/api/ambilsiswa/datasiswa';
   url2:any='http://pantausiswa.xyz/api/ambilsiswa/datakelas';
   key=[];
   constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public http:Http,public menu:MenuController) {
     this.check();
   }




   ionViewDidLoad() {
     console.log('ionViewDidLoad Profil');
   }
   ionViewDidEnter(){
     this.menu.swipeEnable(false,'menu1');
   }

   check(){
     this.storage.get("token").then((token)=>{
       if(token){
         this.token=token;
         let header = new Headers();
         header.append('Content-Type', 'application/json');
         header.append('Accept','Application/json');
         header.append('Authorization', 'Bearer '+ this.token);
         this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
           this.datasiswa = datas.data;
         });

         this.http.get(this.url2, {headers:header}).map(res=>res.json()).subscribe(datas=>{
           this.datakelas = datas
         })

       }
     });
     
   }
 }
