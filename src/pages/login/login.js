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
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams, menu, http, loading, alert, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.storage = storage;
        this.user = {
            email: '',
            password: '',
        };
    }
    Login.prototype.login = function () {
        var _this = this;
        if (this.user.email === '' || this.user.password === '') {
            var alert_1 = this.alert.create({
                title: 'warning',
                subTitle: 'Email dan password tidak boleh kosong',
                buttons: ['ok']
            });
            alert_1.present();
        }
        else {
            var loader_1 = this.loading.create({
                content: 'Mohon tunggu..!!',
            });
            loader_1.present().then(function () {
                _this.http.post('http://pantausiswa.xyz/api/login', _this.user)
                    .toPromise().then(function (response) {
                    _this.storage.remove('email');
                    _this.storage.set('token', response.json().token);
                    _this.storage.set('email', _this.user.email);
                    console.log(response.json().token);
                    //this.storage.set('email', this.user.email).then(()=> {console.log('Stored in localStorage '+ this.user.email)});
                    console.log('email dari login =' + _this.user.email);
                    _this.navCtrl.setRoot(TabsPage);
                    loader_1.dismiss();
                }, function (error) {
                    var alert = _this.alert.create({
                        title: 'warning',
                        subTitle: 'Server Error',
                        buttons: ['ok']
                    });
                    alert.present();
                    loader_1.dismiss();
                });
            });
        }
    };
    Login.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false, 'menu1');
    };
    Login.prototype.ionViewDidLoad = function () {
    };
    return Login;
}());
Login = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams, MenuController,
        Http, LoadingController,
        AlertController, Storage])
], Login);
export { Login };
//# sourceMappingURL=login.js.map