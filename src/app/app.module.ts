import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PesanPage } from '../pages/pesan/pesan';
import { BeritaPage } from '../pages/berita/berita';
import { HomePage } from '../pages/home/home';
import { Pengumuman } from '../pages/pengumuman/pengumuman';
import { Login } from '../pages/login/login';
import { Profil } from '../pages/profil/profil';
import { Isimapel } from '../pages/isimapel/isimapel';
import { Lihatnilaip } from '../pages/lihatnilaip/lihatnilaip';
import { Lihatnilaik } from '../pages/lihatnilaik/lihatnilaik';
import { Lihatnilais } from '../pages/lihatnilais/lihatnilais';
import { Tugas } from '../pages/tugas/tugas';
import { Lihatabsensi } from '../pages/lihatabsensi/lihatabsensi';
import { Notifikasi } from '../pages/notifikasi/notifikasi';
import { Bacaberita } from '../pages/bacaberita/bacaberita';
import { Tulispesan } from '../pages/tulispesan/tulispesan';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    PesanPage,
    BeritaPage,
    HomePage,
    Pengumuman,
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
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PesanPage,
    BeritaPage,
    HomePage,
    Pengumuman,
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
