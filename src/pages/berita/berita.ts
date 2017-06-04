import { Component } from '@angular/core';
import { NavController,MenuController,App,LoadingController,AlertController } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Bacaberita } from '../bacaberita/bacaberita';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html'
})
export class BeritaPage {

  databerita = [];
  constructor(public navCtrl: NavController,public app:App,
    public menu:MenuController, public http:Http, public alert:AlertController,
    public loader:LoadingController) {


  }



  kenotifikasi(){
    this.app.getRootNav().push(Notifikasi);

  }

  kebacaberita(data){
    console.log(data);
    this.app.getRootNav().push(Bacaberita,data);

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewDidLoad();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true,'menu1');
  }

  public gambarku:any;
  ionViewDidLoad(){
        this.http.get('http://pantausiswa.xyz/api/berita').map(res => res.json()).subscribe(datas =>{
          if(datas){
            this.databerita = datas.data;
          }
        }, error=> {
          let alert = this.alert.create({
            title: 'Error',
            subTitle: 'Server Error',
            buttons: ['OK']
          });
          alert.present();
        });

      }

    }
