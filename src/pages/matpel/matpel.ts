import { Component } from '@angular/core';
import { NavController,App,MenuController } from 'ionic-angular';
import { Isimapel } from '../isimapel/isimapel';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the Matpel page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
   selector: 'page-matpel',
   templateUrl: 'matpel.html',
 })
 export class Matpel {

   token:any;
   url ="http://pantausiswa.xyz/api/ambilsiswa/matpel";
   datamatpel:any;
   kunci:any[]=[];
   constructor(public navCtrl: NavController, public http:Http, public app:App, public menu:MenuController, public storage : Storage) {
     this.loadMatpel();
   }




   loadMatpel(){
     this.storage.get('token').then(token=>{
       this.token=token;
       let header = new Headers();
       header.append('Content-Type', 'application/json');
       header.append('Accept','Application/json');
       header.append('Authorization', 'Bearer '+ this.token);
       this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
         this.datamatpel = datas;
         
         // for(let i in this.datamatpel){
         //   console.log(this.datamatpel[i].nama);
         // }
         // this.kunci = Object.keys(this.datamatpel);

         
         // for(let i in this.datamatpel){
         //   //console.log(this.datamatpel[i]);
         //   for(let j in this.datamatpel[i]){
         //     console.log(this.datamatpel[i][j].materi);
         //     console.log(this.datamatpel[i][j].keterangan);
         //   }
         // }    
       })
     })
   }


   




   keisimapel(data){
     console.log(data);
     this.app.getRootNav().push(Isimapel,data);

   }


   kenotifikasi(){
     this.app.getRootNav().push(Notifikasi);

   }

   ionViewDidEnter(){
     this.menu.swipeEnable(true,'menu1');
   }

 }
