declare var Pusher: any;
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AlertController} from 'ionic-angular';

/*
  Generated class for the PusherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
  	*/
  @Injectable()
  export class PusherProvider {
  	private pusher: any;
    status:any;


  	constructor(public http: Http, public alert:AlertController, public local:LocalNotifications) {
  		console.log('Hello PusherProvider Provider');
  		this.pusher = new Pusher('708f5e5f201b46b1ac82', {
  			cluster: 'mt1',
  			encrypted: true
  		});
  		this.pusher.logToConsole = true;

  		var channel = this.pusher.subscribe('siswa.absensi.1');
  		channel.bind('App\\Events\\Notifabsensi',  (data) => {
  			console.log(data.absensi.keterangan);
        this.status = data.absensi.keterangan;
  			this.local.on('click', function(){console.log('asdfasdfasd')});
  			this.local.schedule({
  				title:'Notifikasi Absensi Coy',
  				text: this.status
  			})

  		}); 

      var channel2 = this.pusher.subscribe('siswa.nilai.1');
      channel2.bind('App\\Events\\Notifnilai',  (data) => {
        console.log(data);
        this.status = data.nilai.nilai;
        this.local.on('click', function(){console.log('asdfasdfasd')});
        this.local.schedule({
          title:'Notifikasi Nilai Coy',
          text: this.status
        })

      }); 

  	}

  }
