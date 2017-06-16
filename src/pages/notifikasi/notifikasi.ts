import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,Slides, Platform, LoadingController} from 'ionic-angular';
import { Chart } from 'chart.js';

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
 	@ViewChild('lineCanvas') lineCanvas;

 	notif: any = 0;
 	lineChart: any;
 	public nilaiku:any[]=[];

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
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', waktu:'12 Maret 2017',status: 'Hadir'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan Kuadrat', waktu:'13 Maret 2017',status: 'Izin'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'vektor',waktu:'13 Maret 2017',status: 'Sakit'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Aljabar', waktu:'13 Maret 2017',status: 'Hadir'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Persamaan antara kau dan aku', waktu:'13 Maret 2017',status: 'Izin'},
 		{ matpel:'Matematika', guru: 'Drs. Soesanti', materi:'Tercipta oleh waktu', waktu:'13 Maret 2017',status: 'Alpa'}
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
 		for(let i =0; i<this.datanilai.length;i++){
 			this.nilaiku.push(this.datanilai[i].nilai);
 			console.log(this.nilaiku);
 		}

 		this.lineChart = new Chart(this.lineCanvas.nativeElement, {

 			type: 'line',
 			data: {
 				labels: ["January", "February", "March", "April", "May", "June"],
 				datasets: [
 				{
 					label: "Grafik perkembangan nilai siswa",
 					fill: false,
 					lineTension: 0.1,
 					backgroundColor: "rgba(75,192,192,0.4)",
 					borderColor: "rgba(75,192,192,1)",
 					borderCapStyle: 'butt',
 					borderDash: [],
 					borderDashOffset: 0.0,
 					borderJoinStyle: 'miter',
 					pointBorderColor: "rgba(75,192,192,1)",
 					pointBackgroundColor: "#fff",
 					pointBorderWidth: 1,
 					pointHoverRadius: 5,
 					pointHoverBackgroundColor: "rgba(75,192,192,1)",
 					pointHoverBorderColor: "rgba(220,220,220,1)",
 					pointHoverBorderWidth: 2,
 					pointRadius: 1,
 					pointHitRadius: 10,
 					data: this.nilaiku,
 					spanGaps: false,
 				}
 				]
 			}

 		});

 	}

 	ionViewDidEnter(){
 		this.menu.swipeEnable(false,'menu1');
 	}

 }
