declare var Pusher: any;
import { Component } from '@angular/core';
import { NavController, NavParams,MenuController,Platform,App} from 'ionic-angular';
import { BeritaPage } from '../berita/berita';
import { Pengumuman } from '../pengumuman/pengumuman';
import { Historybk } from '../historybk/historybk';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';
import { AlertController} from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
import { BackgroundMode } from '@ionic-native/background-mode';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    //tab1Root = HomePage;
    //tab2Root = PesanPage;
    tab1Root = BeritaPage;
    tab2Root = Pengumuman;
    tab3Root = Historybk;
    tab4Root = Notifikasi;

    private pusher: any;
    status:any;
    idsiswa:any;
    token:any;
    idortu:any;
    idkelas:any;
    tujuan:any;
    bpengumuman:any;
    bcatatan:any;
    photoside:any;
    constructor(public audio:NativeAudio,private platform: Platform,public navCtrl: NavController, public navParams: NavParams, public menu:MenuController,public badge:Badge,public storage:Storage,public local:LocalNotifications,public alert:AlertController,public background:BackgroundMode,public app:App,private localNotification: PhonegapLocalNotification) {  
        this.platform.ready().then(()=>{
            this.audio.preloadSimple('audio', 'assets/audio/notif.mp3');
        })

    }

    ionViewDidLoad(){

        this.storage.get("token").then((t)=>{
            this.token= t;
            if(this.token){
                this.storage.get("tujuan").then((tujuan)=>{
                    this.tujuan = tujuan;
                    if(this.tujuan ==="siswa"){
                        //     //Siswa channel
                        this.storage.get('id_siswa').then((val) => {
                            this.idsiswa =val;
                            //console.log(this.idsiswa);
                            this.pusher = new Pusher('708f5e5f201b46b1ac82', {
                                cluster: 'mt1',
                                encrypted: true
                            });
                            this.pusher.logToConsole = true;

                            var channeltujuan = this.pusher.subscribe('pengumuman.'+this.tujuan);
                            channeltujuan.bind('App\\Events\\Notifpengumuman',  (data) => {
                                this.status = data.pengumuman.title;
                                this.localNotification.requestPermission().then((permission) => {
                                    this.bpengumuman='N';
                                    if (permission === 'granted') {
                                        // Create the notification
                                        this.localNotification.create('Notifikasi Pengumuman', {
                                            tag: 'Notifikasi Pengumuman',
                                            body: this.status,

                                        });

                                    }
                                });   
                                this.audio.play('audio', ()=>{
                                    console.log('audio play')
                                });            
                            });


                            var channel3 = this.pusher.subscribe('siswa.history.'+this.idsiswa);
                            channel3.bind('App\\Events\\Notifhistory',  (data) => {

                                //  console.log(data);
                                this.status = data.history.peristiwa;
                                this.localNotification.requestPermission().then((permission) => {
                                    this.bcatatan='N';
                                    if (permission === 'granted') {
                                        this.localNotification.create('Notifikasi Catatan', {
                                            tag: 'Catatan Wali Kelas',
                                            body: this.status
                                        });
                                        console.log("kok jalan?")
                                    }
                                });  
                                this.audio.play('audio', ()=>{
                                    console.log('audio play')
                                });             
                            });                
                        });
                    }
                    else if(this.tujuan ==="walimurid"){
                        //Ortu Channel
                        this.storage.get('id_ortu').then((val) => {
                            this.idortu =val;
                            //console.log(this.idortu);
                            this.pusher = new Pusher('708f5e5f201b46b1ac82', {
                                cluster: 'mt1',
                                encrypted: true
                            });
                            this.pusher.logToConsole = true;


                            var channeltujuanortu = this.pusher.subscribe('pengumuman.'+this.tujuan);
                            channeltujuanortu.bind('App\\Events\\Notifpengumuman',  (data) => {
                                this.status = data.pengumuman.title;
                                this.localNotification.requestPermission().then((permission) => {
                                    this.bpengumuman='N';

                                    if (permission === 'granted') {
                                        // Create the notification
                                        this.localNotification.create('Notifikasi Pengumuman', {
                                            tag: 'Notifikasi Pengumuman',
                                            body: this.status,

                                        });

                                    }
                                });   
                                this.audio.play('audio', ()=>{
                                    console.log('audio play')
                                });            
                            });

                            var channelortu3 = this.pusher.subscribe('ortu.history.'+this.idortu);
                            channelortu3.bind('App\\Events\\Notifhistory',  (data) => {

                                //  console.log(data);
                                this.status = data.history.peristiwa;
                                this.localNotification.requestPermission().then((permission) => {
                                    this.bcatatan='N';
                                    if (permission === 'granted') {
                                        this.localNotification.create('Notifikasi Catatan', {
                                            tag: 'Catatan Wali Kelas',
                                            body: this.status
                                        });

                                    }
                                });        
                                this.audio.play('audio', ()=>{
                                    console.log('audio play')
                                });       
                            });                        
                        });
                    }
                })
            }
        })
    }



    ionViewDidEnter(){
        this.menu.swipeEnable(true,'menu1');
    }
    deletebintang(){

        if(this.bpengumuman == 'N')
        {
            this.bpengumuman = '';
        }
        else if (this.bcatatan == 'N'){
            this.bcatatan = '';
        }
    }

}
