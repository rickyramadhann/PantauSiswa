declare var Pusher: any;

import { Component } from '@angular/core';
import { NavController,MenuController,App,LoadingController,AlertController, Platform } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Bacaberita } from '../bacaberita/bacaberita';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
//import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html'
})
export class BeritaPage {

  token : any;
  databerita = [];
  url:any='http://pantausiswa.xyz/api/berita';
  page:number=2;
  key=[];
  splash = true;
  tabBar:any;
  private pusher: any;
  status:any;
  idsiswa:any;
  idortu:any;
  idkelas:any;
  tujuan:any;
  bpengumuman:any;
  blaporan:any;
  bcatatan:any;
  notificationAlreadyReceived = false;
  photoside:any;

  constructor(public backgroundMode: BackgroundMode,public navCtrl: NavController,public app:App,
    public menu:MenuController, public http:Http, public alert:AlertController, public platform:Platform,
    public loader:LoadingController, public storage: Storage,private localNotification: PhonegapLocalNotification,public audio:NativeAudio) {
      
      this.platform.ready().then(()=>{
      this.audio.preloadSimple('audio', 'assets/audio/notif.mp3');
    })

  }


  

  ionViewDidLoad(){
    //  Siswa channel
    this.storage.get('id_siswa').then((val) => {
      this.idsiswa =val;
      //console.log(this.idsiswa);
      this.pusher = new Pusher('708f5e5f201b46b1ac82', {
        cluster: 'mt1',
        encrypted: true
      });
      this.pusher.logToConsole = true;

      var channel = this.pusher.subscribe('siswa.absensi.'+this.idsiswa);
      channel.bind('App\\Events\\Notifabsensi',  (data) => {
        //console.log(data);
        this.status = data.absensi.keterangan;
        this.localNotification.requestPermission().then((permission) => {
          this.blaporan='N';
          if (permission === 'granted') {
            // Create the notification
            this.localNotification.create('Notifikasi Absensi', {
              tag: 'Notifikasi',
              body: this.status,
              icon: 'assets/icon/icon.ico'

            });

          }
        });  
        this.audio.play('audio', ()=>{
          console.log('audio play')
        });


      });

      var channel2 = this.pusher.subscribe('siswa.nilai.'+this.idsiswa);
      channel2.bind('App\\Events\\Notifnilai',  (data) => {

        //console.log(data.nilai.nilai);
        this.status = data.nilai.nilai;
        this.localNotification.requestPermission().then((permission) => {
          this.blaporan='N';
          if (permission === 'granted') {
            this.localNotification.create('Notifikasi Nilai', {
              tag: 'Notifikasi',
              body: this.status
            });

          }
        });  
          this.audio.play('audio', ()=>{
          console.log('audio play')
        });          
      });


    });


    //Ortu Channel
    this.storage.get('id_ortu').then((val) => {
      this.idortu =val;
      //console.log(this.idortu);
      this.pusher = new Pusher('708f5e5f201b46b1ac82', {
        cluster: 'mt1',
        encrypted: true
      });
      this.pusher.logToConsole = true;

      var channelortu1 = this.pusher.subscribe('ortu.absensi.'+this.idortu);
      channelortu1.bind('App\\Events\\Notifabsensi',  (data) => {
        //console.log(data);
        this.status = data.absensi.keterangan;
        this.localNotification.requestPermission().then((permission) => {
          this.blaporan='N';
          if (permission === 'granted') {
            // Create the notification
            this.localNotification.create('Notifikasi Absensi', {
              tag: 'Notifikasi',
              body: this.status,

            });

          }
        });
         this.audio.play('audio', ()=>{
          console.log('audio play')
        });               
      });

      var channelortu2 = this.pusher.subscribe('ortu.nilai.'+this.idortu);
      channelortu2.bind('App\\Events\\Notifnilai',  (data) => {

        //console.log(data.nilai.nilai);
        this.status = data.nilai.nilai;
        this.localNotification.requestPermission().then((permission) => {
          this.blaporan='N';
          if (permission === 'granted') {
            this.localNotification.create('Notifikasi Nilai', {
              tag: 'Notifikasi',
              body: this.status
            });

          }
        });  
         this.audio.play('audio', ()=>{
          console.log('audio play')
        });             
      });                     
    });


    //Kelas Channel
    this.storage.get('id_kelas').then((val) => {
      this.idkelas = val;
      //console.log(this.idkelas);
      this.pusher = new Pusher('708f5e5f201b46b1ac82', {
        cluster: 'mt1',
        encrypted: true
      });
      this.pusher.logToConsole = true;

      var channel3 = this.pusher.subscribe('tugas.'+this.idkelas);
      channel3.bind('App\\Events\\Notiftugas',  (data) => {
        //console.log(data.tugas.materi)
        this.status = data.tugas.materi;
        
        this.blaporan='N';
        
        this.localNotification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            // Create the notification
            this.localNotification.create('Notifikasi Tugas', {
              tag: 'Notifikasi Tugas',
              body: this.status,

            });

          }
        });  
         this.audio.play('audio', ()=>{
          console.log('audio play')
        });             
      });
    });

  }

  loadBerita(page){
    return new Promise(resolve=>{
      this.storage.get('token').then(token=>{
        this.token=token;
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Accept','Application/json');
        header.append('Authorization', 'Bearer '+ this.token);
        this.http.get(this.url + '?page='+ this.page, {headers:header}).map(res=>res.json()).subscribe(data=>{
          resolve(data.data);

        });
      });
    });
  }

  loadmore(infiniteScroll){
    this.loadBerita(this.page).then(items=>{
      let length = items["length"];

      if(length===0){
        infiniteScroll.complete();
        return;
      }
      if(length){        
        this.page++;
      }
      for(var i =length-1; i>=0;i--){
        this.databerita.push(items[i]);
      }
      infiniteScroll.complete();
    });
  }

  kenotifikasi(){
    if(this.blaporan=='N'){

      this.blaporan = '';
    }

    this.app.getRootNav().push(Notifikasi);

  }

  kebacaberita(data){
    console.log(data);
    this.app.getRootNav().push(Bacaberita,data);

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.page = 1  ;
    this.ionViewDidEnter();
    this.page++;

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true,'menu1');

    this.storage.get('token').then(token=>{
      this.token=token;
      let header = new Headers();
      header.append('Content-Type', 'application/json');
      header.append('Accept','Application/json');
      header.append('Authorization', 'Bearer '+ this.token);

      this.http.get(this.url, {headers:header} ).map(res => res.json()).subscribe(datas =>{
        if(datas){
          this.databerita = datas.data;
        }
      }, error=> {
        let alert = this.alert.create({
          title: 'Error',
          subTitle: 'Tidak Ada Koneksi Internet',
          buttons: ['OK']
        });
        alert.present();
      });  
    })

  }
}
