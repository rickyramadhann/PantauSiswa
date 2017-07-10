import { Component,ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
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
import { TabsPage } from '../pages/tabs/tabs';

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

    pages:Array<{title: string, component:any}>;
    constructor(public platform: Platform, private statusBar: StatusBar, 
        public splashScreen: SplashScreen, public storage:Storage, public http:Http) {


        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(true);
            this.statusBar.backgroundColorByHexString('#85020c');
            this.splashScreen.hide();
            this.check();
            
        });


        this.pages=[
        {title: 'Beranda', component:TabsPage},
        {title:'Profil', component:Profil},
        {title:'Mata Pelajaran', component:Matpel},
        {title:'Jadwal Mata Pelajaran', component:Jadwal}
        ];

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

    openPage(page){

        this.nav.setRoot(page.component);
    }

    logout()
    {
        this.storage.remove('token');
        this.storage.remove('email');
        this.nav.setRoot(Login);
    }
    

    
}