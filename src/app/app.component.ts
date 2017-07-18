declare var Pusher: any;
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, MenuController,App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Profil } from '../pages/profil/profil';
import { Login } from '../pages/login/login';
import { Matpel } from '../pages/matpel/matpel';
import { Jadwal } from '../pages/jadwal/jadwal';
import { Ubahpassword } from '../pages/ubahpassword/ubahpassword';
import { TabsPage } from '../pages/tabs/tabs';
//import { PusherProvider } from '../providers/pusher-provider';
//import { BackgroundMode } from '@ionic-native/background-mode';
import { AppMinimize } from '@ionic-native/app-minimize';

import { Badge } from '@ionic-native/badge';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav:Nav;
    rootPage : any;
    email: any;
    token : any;
    datasiswa = [];
    url:any='http://pantausiswa.xyz/api/ambilsiswa/datasiswa';
    key=[];
    //private pusher: any;
    status:any;
    badge1:any;
    ceknotif:boolean;

    constructor(public badge:Badge,public minimize:AppMinimize, public app:App, public platform: Platform, private statusBar: StatusBar, public local:LocalNotifications,
        public splashScreen: SplashScreen, public storage:Storage, public http:Http,  public menu:MenuController) {


        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(true);
            this.statusBar.backgroundColorByHexString('#648aaf');
            this.splashScreen.hide();
            // this.backgroundmode.setDefaults({
            //     hidden:true,
            //     silent:true,
            //     resume:true
            // });
            this.platform.registerBackButtonAction(() => {
                let nav = this.app.getRootNav();
                if(nav.canGoBack()){
                    nav.pop();
                }
                else{
                    this.minimize.minimize();
                }
            });
          
            //this.backgroundmode.enable(); 
            this.check();
           
        });



    }


    check(){
        this.storage.get("token").then((token)=>{
            if(token){
                this.token=token;
                let header = new Headers();
                header.append('Content-Type', 'application/json');
                header.append('Accept','Application/json');
                header.append('Authorization', 'Bearer '+ this.token);
                this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
                    this.datasiswa = datas.data;
                    
                    this.storage.set('id_siswa', datas.data.id);
                    this.storage.set('id_kelas', datas.data.id_kelas);
                    this.storage.set('tujuan', datas.akses);
                    this.storage.set('id_ortu', datas.dataortu);

                })
                this.rootPage = TabsPage;

            }
            else{                
                this.rootPage = Login;
            }
        })
    }

    keprofil(){
        this.nav.push(Profil);
    }
    kematpel(){
        this.nav.push(Matpel);
    }

    kejadwal(){
        this.nav.push(Jadwal);
    }

    keubahpassword(){
        this.nav.push(Ubahpassword);
    }

    logout()
    {
        this.storage.remove('token');
        this.storage.remove('email');
        this.nav.setRoot(Login);
    }



}