var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Profil } from '../pages/profil/profil';
import { Login } from '../pages/login/login';
import { Matpel } from '../pages/matpel/matpel';
import { Jadwal } from '../pages/jadwal/jadwal';
import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, http) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.http = http;
        this.datasiswa = [];
        this.url = 'http://pantausiswa.xyz/api/ambilsiswa/datasiswa';
        this.key = [];
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#02a669');
            _this.splashScreen.hide();
            _this.check();
        });
        this.pages = [
            { title: 'Beranda', component: TabsPage },
            { title: 'Profil', component: Profil },
            { title: 'Mata Pelajaran', component: Matpel },
            { title: 'Jadwal Mata Pelajaran', component: Jadwal }
        ];
    }
    MyApp.prototype.check = function () {
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
                _this.rootPage = TabsPage;
            }
            else {
                _this.rootPage = Login;
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.storage.remove('token');
        this.storage.remove('email');
        this.nav.setRoot(Login);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar,
        SplashScreen, Storage, Http])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map