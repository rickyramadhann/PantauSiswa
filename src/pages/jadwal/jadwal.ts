import { Component} from '@angular/core';
import { IonicPage, NavController,MenuController,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the Jadwal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-jadwal',
  templateUrl: 'jadwal.html',
})
export class Jadwal {

  token:any;
  url ="http://pantausiswa.xyz/api/ambilsiswa/datajadwal";
  datajadwal :any;
  key:any;
  hari: string ="Senin";
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
        this.datajadwal = datas.jadwal;
        this.key = Object.keys(this.datajadwal);
        console.log(this.key);
      })
    })
  }

 
  ionViewDidEnter(){
  this.menu.swipeEnable(false,'menu1');
  }



}
