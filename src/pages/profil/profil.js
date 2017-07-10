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
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the Profil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Profil = (function () {
    function Profil(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.datasiswa = [];
        this.datakelas = [];
        this.url = 'http://pantausiswa.xyz/api/ambilsiswa/datasiswa';
        this.url2 = 'http://pantausiswa.xyz/api/ambilsiswa/datakelas';
        this.key = [];
        this.check();
    }
    Profil.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Profil');
    };
    Profil.prototype.check = function () {
        var _this = this;
        this.storage.get("token").then(function (token) {
            if (token) {
                _this.token = token;
                var header = new Headers();
                header.append('Content-Type', 'application/json');
                header.append('Accept', 'Application/json');
                header.append('Authorization', 'Bearer ' + _this.token);
                _this.http.get(_this.url, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (datas) {
                    _this.datasiswa = datas.data;
                });
                _this.http.get(_this.url2, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (datas) {
                    _this.datakelas = datas;
                });
            }
        });
    };
    return Profil;
}());
Profil = __decorate([
    IonicPage(),
    Component({
        selector: 'page-profil',
        templateUrl: 'profil.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Storage, Http])
], Profil);
export { Profil };
//# sourceMappingURL=profil.js.map