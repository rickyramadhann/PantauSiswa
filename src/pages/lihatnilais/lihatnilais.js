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
 * Generated class for the Lihatnilais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Lihatnilais = (function () {
    function Lihatnilais(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [
            { kategori: 'Tanggung jawab', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar',
                nilai: 'Dipanggil untuk membersihkan meja dan alat bahan yang sudah dipakai.Dilakukan pembinaan.' },
            { kategori: 'Jujur', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan Kuadrat',
                nilai: 'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati' },
            { kategori: 'Gotong Royong', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'vektor',
                nilai: 'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati' },
            { kategori: 'Percaya Diri', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Aljabar',
                nilai: 'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati' },
            { kategori: 'Disiplin', matpel: 'Matematika', guru: 'Drs. Soesanti', materi: 'Persamaan antara kau dan aku',
                nilai: 'Diberi apresiasi/ pujian atas kejujurannya. Diingatkan agar lain kali lebih berhati-hati' },
        ];
    }
    Lihatnilais.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Lihatnilais');
    };
    return Lihatnilais;
}());
Lihatnilais = __decorate([
    IonicPage(),
    Component({
        selector: 'page-lihatnilais',
        templateUrl: 'lihatnilais.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], Lihatnilais);
export { Lihatnilais };
//# sourceMappingURL=lihatnilais.js.map