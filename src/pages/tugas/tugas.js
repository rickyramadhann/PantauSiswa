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
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the Tugas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tugas = (function () {
    function Tugas(navCtrl, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.url = "http://pantausiswa.xyz/api/ambilsiswa/tugas";
        this.namamatpel = navParams.get("nama");
        this.loadTugas();
    }
    Tugas.prototype.loadTugas = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.token = token;
            var header = new Headers();
            header.append('Content-Type', 'application/json');
            header.append('Accept', 'Application/json');
            header.append('Authorization', 'Bearer ' + _this.token);
            _this.http.get(_this.url, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (datas) {
                _this.datatugas = datas[_this.namamatpel];
            });
        });
    };
    Tugas.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad Tugas');
    };
    return Tugas;
}());
Tugas = __decorate([
    Component({
        selector: 'page-tugas',
        templateUrl: 'tugas.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Http, Storage])
], Tugas);
export { Tugas };
//# sourceMappingURL=tugas.js.map