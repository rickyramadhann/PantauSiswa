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
import { NavController, MenuController, App, LoadingController, AlertController } from 'ionic-angular';
import { Notifikasi } from '../notifikasi/notifikasi';
import { Bacaberita } from '../bacaberita/bacaberita';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
var BeritaPage = (function () {
    function BeritaPage(navCtrl, app, menu, http, alert, loader, storage) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.menu = menu;
        this.http = http;
        this.alert = alert;
        this.loader = loader;
        this.storage = storage;
        this.databerita = [];
        this.url = 'http://pantausiswa.xyz/api/berita';
        this.page = 2;
        this.key = [];
    }
    BeritaPage.prototype.loadBerita = function (page) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('token').then(function (token) {
                _this.token = token;
                var header = new Headers();
                header.append('Content-Type', 'application/json');
                header.append('Accept', 'Application/json');
                header.append('Authorization', 'Bearer ' + _this.token);
                _this.http.get(_this.url + '?page=' + _this.page, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    resolve(data.data);
                });
            });
        });
    };
    BeritaPage.prototype.loadmore = function (infiniteScroll) {
        var _this = this;
        this.loadBerita(this.page).then(function (items) {
            var length = items["length"];
            if (length === 0) {
                infiniteScroll.complete();
                return;
            }
            if (length) {
                _this.page++;
            }
            for (var i = length - 1; i >= 0; i--) {
                _this.databerita.push(items[i]);
            }
            infiniteScroll.complete();
        });
    };
    BeritaPage.prototype.kenotifikasi = function () {
        this.app.getRootNav().push(Notifikasi);
    };
    BeritaPage.prototype.kebacaberita = function (data) {
        console.log(data);
        this.app.getRootNav().push(Bacaberita, data);
    };
    BeritaPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.page = 1;
        this.ionViewDidEnter();
        this.page++;
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    BeritaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menu.swipeEnable(true, 'menu1');
        this.storage.get('token').then(function (token) {
            _this.token = token;
            var header = new Headers();
            header.append('Content-Type', 'application/json');
            header.append('Accept', 'Application/json');
            header.append('Authorization', 'Bearer ' + _this.token);
            _this.http.get(_this.url, { headers: header }).map(function (res) { return res.json(); }).subscribe(function (datas) {
                if (datas) {
                    _this.databerita = datas.data;
                }
            }, function (error) {
                var alert = _this.alert.create({
                    title: 'Error',
                    subTitle: 'Server Error',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    return BeritaPage;
}());
BeritaPage = __decorate([
    Component({
        selector: 'page-berita',
        templateUrl: 'berita.html'
    }),
    __metadata("design:paramtypes", [NavController, App,
        MenuController, Http, AlertController,
        LoadingController, Storage])
], BeritaPage);
export { BeritaPage };
//# sourceMappingURL=berita.js.map