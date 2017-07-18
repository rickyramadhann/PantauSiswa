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
    idortu:any;
    idkelas:any;
    tujuan:any;
    bpengumuman:any;
    blaporan:any;
    bcatatan:any;
    constructor(private platform: Platform,public navCtrl: NavController, public navParams: NavParams, public menu:MenuController,public badge:Badge,public storage:Storage,public local:LocalNotifications,public alert:AlertController,public background:BackgroundMode,public app:App,private localNotification: PhonegapLocalNotification) {
        this.background.disable();
        this.platform.ready().then(() =>{
            this.ionViewDidLoad();

        });
    }

    ionViewDidLoad(){
        //Siswa channel
        this.storage.get('id_siswa').then((val) => {
            this.idsiswa =val;
            console.log(this.idsiswa);
            this.pusher = new Pusher('708f5e5f201b46b1ac82', {
                cluster: 'mt1',
                encrypted: true
            });
            this.pusher.logToConsole = true;

            var channel = this.pusher.subscribe('siswa.absensi.'+this.idsiswa);
            channel.bind('App\\Events\\Notifabsensi',  (data) => {
                console.log(data);
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
            });

            var channel2 = this.pusher.subscribe('siswa.nilai.'+this.idsiswa);
            channel2.bind('App\\Events\\Notifnilai',  (data) => {

                console.log(data.nilai.nilai);
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
            });

            var channel3 = this.pusher.subscribe('siswa.history.'+this.idsiswa);
            channel3.bind('App\\Events\\Notifhistory',  (data) => {

                console.log(data);
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
            });                
        });


        //Ortu Channel
        this.storage.get('id_ortu').then((val) => {
            this.idortu =val;
            console.log(this.idortu);
            this.pusher = new Pusher('708f5e5f201b46b1ac82', {
                cluster: 'mt1',
                encrypted: true
            });
            this.pusher.logToConsole = true;

            var channelortu1 = this.pusher.subscribe('ortu.absensi.'+this.idortu);
            channelortu1.bind('App\\Events\\Notifabsensi',  (data) => {
                console.log(data);
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
            });

            var channelortu2 = this.pusher.subscribe('ortu.nilai.'+this.idortu);
            channelortu2.bind('App\\Events\\Notifnilai',  (data) => {

                console.log(data.nilai.nilai);
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
            });

            var channelortu3 = this.pusher.subscribe('ortu.history.'+this.idortu);
            channelortu3.bind('App\\Events\\Notifhistory',  (data) => {

                console.log(data);
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
            });                        
        });


        //Kelas Channel
        this.storage.get('id_kelas').then((val) => {
            this.idkelas = val;
            console.log(this.idkelas);
            this.pusher = new Pusher('708f5e5f201b46b1ac82', {
                cluster: 'mt1',
                encrypted: true
            });
            this.pusher.logToConsole = true;

            var channel3 = this.pusher.subscribe('tugas.'+this.idkelas);
            channel3.bind('App\\Events\\Notiftugas',  (data) => {
                console.log(data.tugas.materi)
                this.status = data.tugas.materi;
                this.localNotification.requestPermission().then((permission) => {
                    this.blaporan='N';
                    if (permission === 'granted') {
                        // Create the notification
                        this.localNotification.create('Notifikasi Tugas', {
                            tag: 'Notifikasi Tugas',
                            body: this.status,

                        });

                    }
                });               
            });
        });

         //Pengumuman Channel
        this.storage.get('tujuan').then((val) => {
            this.tujuan = val;
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
            });
        });

    }


    ionViewDidEnter(){
        this.menu.swipeEnable(true,'menu1');
    }
    deletebintang(){
        if(this.blaporan=='N'){

            this.blaporan = '';
        }
        else if(this.bpengumuman == 'N')
        {
            this.bpengumuman = '';
        }
        else if (this.bcatatan == 'N'){
            this.bcatatan = '';
        }
    }

}
