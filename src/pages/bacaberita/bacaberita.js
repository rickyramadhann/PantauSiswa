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
/**
 * Generated class for the Bacaberita page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Bacaberita = (function () {
    function Bacaberita(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.title = navParams.get('title');
        this.content = navParams.get('content');
        this.image = navParams.get('image');
        this.created_at = navParams.get('created_at');
    }
    Bacaberita.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Bacaberita');
    };
    Bacaberita.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false, 'menu1');
    };
    return Bacaberita;
}());
Bacaberita = __decorate([
    IonicPage(),
    Component({
        selector: 'page-bacaberita',
        templateUrl: 'bacaberita.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, MenuController])
], Bacaberita);
export { Bacaberita };
//# sourceMappingURL=bacaberita.js.map