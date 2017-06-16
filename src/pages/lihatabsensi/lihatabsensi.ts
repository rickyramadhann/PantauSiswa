import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lihatabsensi page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lihatabsensi',
  templateUrl: 'lihatabsensi.html',
})
export class Lihatabsensi {
	data:Array<{matpel:string, guru: string, materi:string, waktu:string, status:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.data=[
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', waktu:'12 Maret 2017',status: 'Hadir'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', waktu:'13 Maret 2017',status: 'Izin'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor',waktu:'13 Maret 2017',status: 'Sakit'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', waktu:'13 Maret 2017',status: 'Hadir'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', waktu:'13 Maret 2017',status: 'Izin'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Tercipta oleh waktu', waktu:'13 Maret 2017',status: 'Absen'}
		]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lihatabsensi');
  }

}
