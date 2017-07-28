import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { TruncatePipe } from 'angular2-truncate';
//import { SortBy } from '../pipes/sort-by';

//providers
import { Loginservice }from '../providers/loginservice';
//import { PusherProvider }from '../providers/pusher-provider';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AppMinimize } from '@ionic-native/app-minimize';

//pipes-
import { Moment } from '../pipes/moment';

import { LocalNotifications } from '@ionic-native/local-notifications'
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { Badge } from '@ionic-native/badge';


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
import { Bacaberita } from '../pages/bacaberita/bacaberita';
import { Tulispesan } from '../pages/tulispesan/tulispesan';
import { Bacapengumuman } from '../pages/bacapengumuman/bacapengumuman';
import { Bacacatatan } from '../pages/bacacatatan/bacacatatan';
import { Bacanilais } from '../pages/bacanilais/bacanilais';
import { Ubahpassword } from '../pages/ubahpassword/ubahpassword';

import { Notifikasi } from '../pages/notifikasi/notifikasi';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';



@NgModule({
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
    Bacapengumuman,
    Bacacatatan,
    Ubahpassword,
    Bacanilais,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'}),
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
    Bacapengumuman,
    Bacacatatan,
    Ubahpassword,
    Bacanilais,
  ],
  providers: [
    StatusBar,
    SplashScreen,LocalNotifications,PhonegapLocalNotification,NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Loginservice,BackgroundMode,AppMinimize,Badge
  ]
})
export class AppModule {}
