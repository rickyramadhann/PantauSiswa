import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lihatnilaik page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lihatnilaik',
  templateUrl: 'lihatnilaik.html',
})
export class Lihatnilaik {

	data:Array<{kategori:string, matpel:string, guru: string, materi:string, nilai:number}>;
	
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data=[
			{kategori:'Praktek', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', nilai:90},
			{kategori:'Produk', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', nilai:60},
			{kategori:'Proyek', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor', nilai:70},
			{kategori:'Portofolio', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', nilai:85},
			{kategori:'Praktek', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', nilai:90},
			{kategori:'Proyek', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Tercipta oleh waktu', nilai:40}
		]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lihatnilaik');
  }

}
