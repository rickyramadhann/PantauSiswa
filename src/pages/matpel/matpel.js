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
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the Matpel page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Matpel = (function () {
    function Matpel(navCtrl, http, app, menu, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.app = app;
        this.menu = menu;
        this.storage = storage;
        this.url = "http://pantausiswa.xyz/api/ambilsiswa/matpel";
        this.kunci = [];
        this.loadMatpel();
    }
    Matpel.prototype.loadMatpel = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.token = token;
            var header = new Headers();
            header.append('Content-Type', 'application/json');
            header.append('Accept', 'Application/json');
            header.append('Authorization', 'Bearer ' + _this.token);
            _this.http.get(_this.url, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (datas) {
                _this.datamatpel = datas;
                // for(let i in this.datamatpel){
                //   console.log(this.datamatpel[i].nama);
                // }
                // this.kunci = Object.keys(this.datamatpel);
                // for(let i in this.datamatpel){
                //   //console.log(this.datamatpel[i]);
                //   for(let j in this.datamatpel[i]){
                //     console.log(this.datamatpel[i][j].materi);
                //     console.log(this.datamatpel[i][j].keterangan);
                //   }
                // }    
            });
        });
    };
    Matpel.prototype.keisimapel = function (data) {
        console.log(data);
        this.app.getRootNav().push(Isimapel, data);
    };
    Matpel.prototype.kenotifikasi = function () {
        this.app.getRootNav().push(Notifikasi);
    };
    Matpel.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(true, 'menu1');
    };
    return Matpel;
}());
Matpel = __decorate([
    Component({
        selector: 'page-matpel',
        templateUrl: 'matpel.html',
    }),
    __metadata("design:paramtypes", [NavController, Http, App, MenuController, Storage])
], Matpel);
export { Matpel };
//# sourceMappingURL=matpel.js.map