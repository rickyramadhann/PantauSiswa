import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, MenuController} from 'ionic-angular';
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
import { PusherProvider } from '../providers/pusher-provider';
import { BackgroundMode } from '@ionic-native/background-mode';
//import { LocalNotifications } from '@ionic-native/local-notifications'



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

    constructor(public backgroundmode: BackgroundMode, public platform: Platform, private statusBar: StatusBar, 
        public splashScreen: SplashScreen, private myService: PusherProvider, public storage:Storage, public http:Http,  public menu:MenuController) {


        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(true);
            this.statusBar.backgroundColorByHexString('#648aaf');
            this.splashScreen.hide();
            this.backgroundmode.setDefaults({
                hidden:true,
                silent:true,
                resume:true
            });
            this.backgroundmode.overrideBackButton();
            this.backgroundmode.enable();

            this.check();
            //console.log('asdfkjaslfkasjlfkjsdlkfj')
            // console.log(this.myService);
            // if(this.myService){
                //     let alert = this.alert.create({
                    //         title: 'Ada notifikasi',
                    //         subTitle: 'coba cek',
                    //         buttons: ['ok']
                    //     });
                    //     alert.present();
                    // }

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