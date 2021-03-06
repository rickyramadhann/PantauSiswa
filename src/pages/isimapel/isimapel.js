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
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Tugas } from '../tugas/tugas';
/**
 * Generated class for the Isimapel page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Isimapel = (function () {
    function Isimapel(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.nama = this.navParams.get('nama');
        this.foto = this.navParams.get;
    }
    Isimapel.prototype.ketugas = function () {
        this.navCtrl.push(Tugas, {
            nama: this.nama
        });
    };
    Isimapel.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Isimapel');
    };
    Isimapel.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false, 'menu1');
    };
    return Isimapel;
}());
Isimapel = __decorate([
    IonicPage(),
    Component({
        selector: 'page-isimapel',
        templateUrl: 'isimapel.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, MenuController])
], Isimapel);
export { Isimapel };
//# sourceMappingURL=isimapel.js.map