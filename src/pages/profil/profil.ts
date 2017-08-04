import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

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
   tgl_lahir:any;
   email:any;
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
           console.log(datas.data.tgl_lahir);
           this.datasiswa = datas.data;
           this.storage.get('email').then((v)=>{
             this.email = v;
           })
           this.tgl_lahir= moment(datas.data.tgl_lahir).locale('id').format('l');

           
         });

         this.http.get(this.url2, {headers:header}).map(res=>res.json()).subscribe(datas=>{
           this.datakelas = datas
         })

       }
     });
     
   }
 }
