var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Slides, Platform, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the Notifikasi page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Notifikasi = (function () {
    function Notifikasi(navCtrl, http, navParams, menu, storage, platform, loading) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.menu = menu;
        this.storage = storage;
        this.platform = platform;
        this.loading = loading;
        this.notif = 0;
        this.nilaiku = [];
        this.urlabsensi = "http://pantausiswa.xyz/api/ambilsiswa/absensi";
        this.total = 0;
        this.rata = 0;
        this.datatugas = [
            { matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar', keterangan: 'Kerjakan halaman 10-11', deadline: '12 Maret 2017' },
            { matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan Kuadrat', keterangan: 'Kerjakan halaman 10-11', deadline: '13 Maret 2017' },
            { matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'vektor', keterangan: 'Kerjakan halaman 10-11', deadline: '13 Maret 2017' },
            { matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar', keterangan: 'Kerjakan halaman 10-11', deadline: '13 Maret 2017' },
            { matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan antara kau dan aku', keterangan: 'Kerjakan halaman 10-11', deadline: '13 Maret 2017' },
            { matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Tercipta oleh deadline', keterangan: 'Kerjakan halaman 10-11', deadline: '13 Maret 2017' }
        ];
        this.datanilai = [
            { kategori: 'Ulangan Harian', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar', nilai: 90, waktu: '09.00' },
            { kategori: 'Tugas', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan Kuadrat', nilai: 60, waktu: '09.00' },
            { kategori: 'Tugas', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'vektor', nilai: 70, waktu: '09.00' },
            { kategori: 'Ulangan Harian', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar', nilai: 85, waktu: '09.00' },
            { kategori: 'Tugas', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan antara kau dan aku', nilai: 90, waktu: '09.00' },
            { kategori: 'Ulangan Harian', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Tercipta oleh waktu', nilai: 40, waktu: '09.00' }
        ];
        //this.getdataabsensi();
    }
    Notifikasi.prototype.selectTab = function (index) {
        this.pageSlider.slideTo(index);
    };
    Notifikasi.prototype.changeWillSlide = function ($event) {
        this.notif = $event._snapIndex.toString();
    };
    Notifikasi.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Notifikasi');
        for (var i = 0; i < this.datanilai.length; i++) {
            this.total += this.datanilai[i].nilai;
            this.nilaiku.push(this.datanilai[i].nilai);
            //console.log(this.nilaiku);
        }
        this.rata = this.total / this.datanilai.length;
        console.log(this.rata);
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
    };
    // getdataabsensi(){
    // 	this.storage.get('token').then(token=>{
    // 		this.token=token;
    // 		let header = new Headers();
    // 		header.append('Content-Type', 'application/json');
    // 		header.append('Accept','Application/json');
    // 		header.append('Authorization', 'Bearer '+ this.token);
    // 		this.http.get(this.urlabsensi,{headers:header}).map(res=>res.json()).subscribe(datas=>{
    // 			this.dataabsensi = datas.Matematika;
    // 			this.key = Object.keys(this.dataabsensi);
    // 			console.log(this.key);
    // 		})
    // 	})
    // }
    Notifikasi.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false, 'menu1');
    };
    return Notifikasi;
}());
__decorate([
    ViewChild('pageSlider'),
    __metadata("design:type", Slides)
], Notifikasi.prototype, "pageSlider", void 0);
__decorate([
    ViewChild('lineCanvas'),
    __metadata("design:type", Object)
], Notifikasi.prototype, "lineCanvas", void 0);
Notifikasi = __decorate([
    IonicPage(),
    Component({
        selector: 'page-notifikasi',
        templateUrl: 'notifikasi.html',
    }),
    __metadata("design:paramtypes", [NavController, Http, NavParams,
        MenuController, Storage, Platform, LoadingController])
], Notifikasi);
export { Notifikasi };
//# sourceMappingURL=notifikasi.js.map