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
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var Lihatabsensi = (function () {
    function Lihatabsensi(navCtrl, http, app, menu, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.app = app;
        this.menu = menu;
        this.storage = storage;
        this.url = "http://pantausiswa.xyz/api/ambilsiswa/absensi";
        this.loadAbsensi();
    }
    Lihatabsensi.prototype.loadAbsensi = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.token = token;
            var header = new Headers();
            header.append('Content-Type', 'application/json');
            header.append('Accept', 'Application/json');
            header.append('Authorization', 'Bearer ' + _this.token);
            _this.http.get(_this.url, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (datas) {
                _this.dataabsensi = datas;
                _this.key = Object.keys(_this.dataabsensi);
                console.log(_this.key);
                console.log(_this.dataabsensi);
            });
        });
    };
    Lihatabsensi.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(true, 'menu1');
    };
    return Lihatabsensi;
}());
Lihatabsensi = __decorate([
    Component({
        selector: 'page-lihatabsensi',
        templateUrl: 'lihatabsensi.html',
    }),
    __metadata("design:paramtypes", [NavController, Http, App, MenuController, Storage])
], Lihatabsensi);
export { Lihatabsensi };
//# sourceMappingURL=lihatabsensi.js.map