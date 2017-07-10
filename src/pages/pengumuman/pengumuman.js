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
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Bacapengumuman } from '../bacapengumuman/bacapengumuman';
/**
 * Generated class for the Pengumuman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Pengumuman = (function () {
    function Pengumuman(navCtrl, app, navParams, menu, storage, http) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.menu = menu;
        this.storage = storage;
        this.http = http;
        this.url = 'http://pantausiswa.xyz/api/ambilsiswa/pengumuman';
        this.page = 1;
        this.key = [];
    }
    Pengumuman.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pengumuman');
    };
    Pengumuman.prototype.kenotifikasi = function () {
        this.app.getRootNav().push(Notifikasi);
    };
    Pengumuman.prototype.kebacapengumuman = function (datapengumuman) {
        console.log(datapengumuman);
        this.app.getRootNav().push(Bacapengumuman, datapengumuman);
    };
    Pengumuman.prototype.ionViewDidEnter = function (page) {
        var _this = this;
        this.menu.swipeEnable(true, 'menu1');
        this.storage.get('token').then(function (token) {
            _this.token = token;
            var header = new Headers();
            header.append('Content-Type', 'application/json');
            header.append('Accept', 'Application/json');
            header.append('Authorization', 'Bearer ' + _this.token);
            _this.http.get(_this.url + '?page=' + _this.page, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (datas) {
                _this.datapengumuman = datas.data;
                _this.key = Object.keys(_this.datapengumuman);
                console.log(_this.key);
            });
        });
    };
    return Pengumuman;
}());
Pengumuman = __decorate([
    IonicPage(),
    Component({
        selector: 'page-pengumuman',
        templateUrl: 'pengumuman.html',
    }),
    __metadata("design:paramtypes", [NavController, App, NavParams, MenuController, Storage, Http])
], Pengumuman);
export { Pengumuman };
//# sourceMappingURL=pengumuman.js.map