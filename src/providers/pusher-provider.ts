declare var Pusher: any;
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the PusherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
  	*/
  @Injectable()
  export class PusherProvider {
  	private pusher: any;
    status:any;
    idkelas:any;

    constructor(public http: Http, public alert:AlertController,public storage:Storage, public local:LocalNotifications) {
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
          // this.blaporan='N';

          this.local.hasPermission().then((granted)=>{
            granted == true
            this.local.on('click', this.local.cancelAll())
            this.local.schedule({
              id:1,
              title:'Notifikasi tugas',
              text: this.status
            })
          })
        })

        // this.localNotification.requestPermission().then((permission) => {
          //   if (permission === 'granted') {
            //     // Create the notification
            //     this.localNotification.create('Notifikasi Tugas', {
              //       tag: 'Notifikasi Tugas',
              //       body: this.status,

              //     });

              //   }
              // });               
            });
      

    }

  }


