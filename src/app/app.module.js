var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { TruncatePipe } from 'angular2-truncate';
//import { SortBy } from '../pipes/sort-by';
//providers
import { Loginservice } from '../providers/loginservice';
//pipes-
import { Moment } from '../pipes/moment';
//tabs
//import { PesanPage } from '../pages/pesan/pesan';
import { BeritaPage } from '../pages/berita/berita';
import { Historybk } from '../pages/historybk/historybk';
//sidenav
import { Profil } from '../pages/profil/profil';
import { Matpel } from '../pages/matpel/matpel';
import { Jadwal } from '../pages/jadwal/jadwal';
import { Pengumuman } from '../pages/pengumuman/pengumuman';
import { Login } from '../pages/login/login';
import { Isimapel } from '../pages/isimapel/isimapel';
import { Lihatnilaip } from '../pages/lihatnilaip/lihatnilaip';
import { Lihatnilaik } from '../pages/lihatnilaik/lihatnilaik';
import { Lihatnilais } from '../pages/lihatnilais/lihatnilais';
import { Tugas } from '../pages/tugas/tugas';
import { Lihatabsensi } from '../pages/lihatabsensi/lihatabsensi';
import { Notifikasi } from '../pages/notifikasi/notifikasi';
import { Bacaberita } from '../pages/bacaberita/bacaberita';
import { Tulispesan } from '../pages/tulispesan/tulispesan';
import { Bacapengumuman } from '../pages/bacapengumuman/bacapengumuman';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            //  PesanPage,
            BeritaPage,
            Historybk,
            Pengumuman,
            Matpel,
            Jadwal,
            Profil,
            Login,
            Isimapel,
            Lihatnilaip,
            Lihatnilaik,
            Lihatnilais,
            Tugas,
            Lihatabsensi,
            Notifikasi,
            Bacaberita,
            Tulispesan,
            TabsPage,
            Moment,
            TruncatePipe,
            Bacapengumuman
        ],
        imports: [
            BrowserModule,
            HttpModule,
            IonicModule.forRoot(MyApp, { tabsPlacement: 'bottom' }),
            IonicStorageModule.forRoot()
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            //PesanPage,
            BeritaPage,
            Historybk,
            Pengumuman,
            Matpel,
            Jadwal,
            Profil,
            Login,
            Isimapel,
            Lihatnilaip,
            Lihatnilaik,
            Lihatnilais,
            Tugas,
            Lihatabsensi,
            Notifikasi,
            Bacaberita,
            Tulispesan,
            TabsPage,
            Bacapengumuman
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }, Loginservice
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map