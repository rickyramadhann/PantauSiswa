import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lihatnilais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lihatnilais',
  templateUrl: 'lihatnilais.html',
})
export class Lihatnilais {
  data:Array<{kategori:string, matpel:string, guru: string, materi:string, nilai:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.data=[
			{kategori:'Tanggung jawab', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', 
			nilai:'Dipanggil untuk membersihkan meja dan alat bahan yang sudah dipakai.Dilakukan pembinaan.'},
			{kategori:'Jujur', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', 
			nilai:'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati'},
			{kategori:'Gotong Royong', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor', 
			nilai:'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati'},
			{kategori:'Percaya Diri', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', 
			nilai:'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati'},
			{kategori:'Disiplin', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', 
			nilai:'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati'},
			
		]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lihatnilais');
  }

}
