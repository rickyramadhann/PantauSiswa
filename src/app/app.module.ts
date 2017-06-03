import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
//import { SortBy } from '../pipes/sort-by';

//providers

//pipes
import { Moment } from '../pipes/moment';


//tabs
//import { PesanPage } from '../pages/pesan/pesan';
import { BeritaPage } from '../pages/berita/berita';
import { Historybk } from '../pages/historybk/historybk';

//sidenav
import { Profil } from '../pages/profil/profil';
import { Matpel } from '../pages/matpel/matpel';

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

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
  //  PesanPage,
    BeritaPage,
    Historybk,
    Pengumuman,
    Matpel,
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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
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
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
