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
import { NavController, App, MenuController } from 'ionic-angular';
import { Isimapel } from '../isimapel/isimapel';
import { Notifikasi } from '../notifikasi/notifikasi';
var HomePage = (function () {
    function HomePage(navCtrl, app, menu) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.menu = menu;
        this.data = [
            { guru: 'Drs. Guru 1', matpel: 'Matematika' },
            { guru: 'Drs. Guru 2', matpel: 'Bahasa Indonesia' },
            { guru: 'Drs. Guru 3', matpel: 'Bahasa Inggris' },
            { guru: 'Drs. Guru 4', matpel: 'Fisika' },
            { guru: 'Drs. Guru 5', matpel: 'Kimia' },
            { guru: 'Drs. Guru 6', matpel: 'Biologi' },
            { guru: 'Drs. Guru 7', matpel: 'Pendidikan Kewarganegraan' },
            { guru: 'Drs. Guru 8', matpel: 'Agama' }
        ];
    }
    HomePage.prototype.keisimapel = function () {
        this.app.getRootNav().push(Isimapel);
    };
    HomePage.prototype.kenotifikasi = function () {
        this.app.getRootNav().push(Notifikasi);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(true, 'menu1');
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, App, MenuController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map