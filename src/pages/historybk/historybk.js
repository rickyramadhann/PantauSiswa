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
import { IonicPage, NavController, NavParams, MenuController, App } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
/**
 * Generated class for the Historybk page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Historybk = (function () {
    function Historybk(navCtrl, navParams, app, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.menu = menu;
    }
    Historybk.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Historybk');
    };
    Historybk.prototype.kenotifikasi = function () {
        this.app.getRootNav().push(Notifikasi);
    };
    Historybk.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(true, 'menu1');
    };
    return Historybk;
}());
Historybk = __decorate([
    IonicPage(),
    Component({
        selector: 'page-historybk',
        templateUrl: 'historybk.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        App, MenuController])
], Historybk);
export { Historybk };
//# sourceMappingURL=historybk.js.map