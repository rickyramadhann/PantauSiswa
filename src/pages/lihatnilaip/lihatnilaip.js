var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Lihatnilaip page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Lihatnilaip = (function () {
    function Lihatnilaip(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [
            { kategori: 'Ulangan Harian', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar', nilai: 90 },
            { kategori: 'Tugas', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan Kuadrat', nilai: 60 },
            { kategori: 'Tugas', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'vektor', nilai: 70 },
            { kategori: 'Ulangan Harian', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar', nilai: 85 },
            { kategori: 'Tugas', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan antara kau dan aku', nilai: 90 },
            { kategori: 'Ulangan Harian', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Tercipta oleh waktu', nilai: 40 }
        ];
    }
    Lihatnilaip.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Lihatnilaip');
    };
    return Lihatnilaip;
}());
Lihatnilaip = __decorate([
    IonicPage(),
    Component({
        selector: 'page-lihatnilaip',
        templateUrl: 'lihatnilaip.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], Lihatnilaip);
export { Lihatnilaip };
//# sourceMappingURL=lihatnilaip.js.map