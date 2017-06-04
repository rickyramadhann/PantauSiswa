import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,Slides, Platform, LoadingController} from 'ionic-angular';

/**
 * Generated class for the Notifikasi page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-notifikasi',
 	templateUrl: 'notifikasi.html',
 })
 export class Notifikasi {
 	@ViewChild('pageSlider') pageSlider: Slides;
 	notif: any = 0;

 	
 	datatugas:Array<{matpel:string, guru: string, materi:string,keterangan:string, deadline:string}>;
 	dataabsensi:Array<{matpel:string, guru: string, materi:string, waktu:string, status:string}>;
 	datanilai:Array<{kategori:string, matpel:string, guru: string, materi:string,waktu:string, nilai:number}>;

 	constructor(public navCtrl: NavController, public navParams: NavParams,
 		public menu:MenuController,public platform:Platform, public loading:LoadingController) {
 		this.datatugas=[
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', keterangan:'Kerjakan halaman 10-11',deadline:'12 Maret 2017'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor',keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar',keterangan:'Kerjakan halaman 10-11', deadline:'13 Maret 2017'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Tercipta oleh deadline', keterangan:'Kerjakan halaman 10-11',deadline:'13 Maret 2017'}
 		]

 		this.dataabsensi=[
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', waktu:'12 Maret 2017',status: 'H'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', waktu:'13 Maret 2017',status: 'I'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor',waktu:'13 Maret 2017',status: 'S'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', waktu:'13 Maret 2017',status: 'H'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', waktu:'13 Maret 2017',status: 'I'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Tercipta oleh waktu', waktu:'13 Maret 2017',status: 'A'}
 		]

 		this.datanilai=[
 		{kategori:'Ulangan Harian', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', nilai:90,waktu:'09.00'},
 		{kategori:'Tugas', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', nilai:60,waktu:'09.00'},
 		{kategori:'Tugas', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor', nilai:70,waktu:'09.00'},
 		{kategori:'Ulangan Harian', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', nilai:85,waktu:'09.00'},
 		{kategori:'Tugas', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', nilai:90,waktu:'09.00'},
 		{kategori:'Ulangan Harian', matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Tercipta oleh waktu', nilai:40,waktu:'09.00'}
 		]
 	}

 	selectTab(index) {
		this.pageSlider.slideTo(index);
	}
	changeWillSlide($event) {
		this.notif = $event._snapIndex.toString();
	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Notifikasi');
 	}

 	ionViewDidEnter(){
 		this.menu.swipeEnable(false,'menu1');
 	}

 }
