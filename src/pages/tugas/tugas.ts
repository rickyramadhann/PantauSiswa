import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tugas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tugas',
  templateUrl: 'tugas.html',
})
export class Tugas {
  data:Array<{matpel:string, guru: string, materi:string,keterangan:string, deadline:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

	this.data=[
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', keterangan:'Kerjakan halaman 10-11',deadline:'12 Maret 2017'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor',keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar',keterangan:'Kerjakan halaman 10-11', deadline:'13 Maret 2017'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'},
			{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Tercipta oleh deadline', keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'}
		]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tugas');
  }

}
