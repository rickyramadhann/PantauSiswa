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
import { NavController, MenuController, App } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Tulispesan } from '../tulispesan/tulispesan';
var PesanPage = (function () {
    function PesanPage(navCtrl, app, menu) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.menu = menu;
    }
    PesanPage.prototype.kenotifikasi = function () {
        this.app.getRootNav().push(Notifikasi);
    };
    PesanPage.prototype.ketulispesan = function () {
        this.app.getRootNav().push(Tulispesan);
    };
    PesanPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(true, 'menu1');
    };
    return PesanPage;
}());
PesanPage = __decorate([
    Component({
        selector: 'page-pesan',
        templateUrl: 'pesan.html'
    }),
    __metadata("design:paramtypes", [NavController, App, MenuController])
], PesanPage);
export { PesanPage };
//# sourceMappingURL=pesan.js.map