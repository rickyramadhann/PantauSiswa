declare var Pusher: any;
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, MenuController,App, Events,LoadingController} from 'ionic-angular';
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
import { BackgroundMode } from '@ionic-native/background-mode';
import { AppMinimize } from '@ionic-native/app-minimize';
import { Autostart } from '@ionic-native/autostart';
import { CacheService } from "ionic-cache";

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
    photoside:any;
    namasiswa:any;
    idsiswa:any;
    idortu:any;
    idkelas:any;
    tujuan:any;

    constructor(public loading: LoadingController,public cache:CacheService, public events: Events,public backgroundmode:BackgroundMode,public minimize:AppMinimize, public app:App, public platform: Platform, private statusBar: StatusBar, public local:LocalNotifications,private autostart: Autostart,public splashScreen: SplashScreen, public storage:Storage, public http:Http,  public menu:MenuController) {


        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(true);
            this.statusBar.backgroundColorByHexString('#02756a');
            this.hidesplash();
            //this.splashScreen.hide();
            this.backgroundmode.setDefaults({
                hidden:true,
                resume:true,
                silent:true
            });
            this.backgroundmode.enable();
            this.platform.registerBackButtonAction(() => {
                let nav = this.app.getRootNav();
                if(nav.canGoBack()){
                    nav.pop();
                }
                else{
                    this.minimize.minimize();
                }
            });
            events.subscribe('token:changed', token=>{
                if(token !==undefined && token !==""){
                    this.token = token;
                    this.storage.set('token', this.token);

                }
            })
            this.ionViewDidEnter()
            events.subscribe('username:changed', username=>{
                if(username !== undefined && username !== ""){
                    this.namasiswa = username;
                    this.storage.set('namasiswa', this.namasiswa);
                }
            })
            events.subscribe('photo:changed', photo=>{
                if(photo !==undefined && photo !==""){
                    this.photoside = photo;
                    this.storage.set('fotosiswa', this.photoside);
                }
            })
            events.subscribe('idsiswa:changed', idsiswa=>{
                if(idsiswa !==undefined && idsiswa !==""){
                    this.idsiswa = idsiswa;
                    this.storage.set('id_siswa', this.idsiswa);
                }
            })
            events.subscribe('idortu:changed', idortu=>{
                if(idortu !==undefined && idortu !==""){
                    this.idortu = idortu;
                    this.storage.set('id_ortu', this.idortu);

                }
            })
            events.subscribe('idkelas:changed', idkelas=>{
                if(idkelas !==undefined && idkelas !==""){
                    this.idkelas = idkelas;
                    this.storage.set('id_kelas', this.idkelas);
                }
            })
            events.subscribe('tujuan:changed', tujuan=>{
                if(tujuan !==undefined && tujuan !==""){
                    this.tujuan = tujuan;
                    this.storage.set('tujuan', this.tujuan);
                }
            })


        });
        

    }

    hidesplash()
    {
        if(SplashScreen){
            setTimeout(()=>{
                this.splashScreen.hide();
            },100);
        }
    }

    ionViewDidEnter(){
        this.storage.get("token").then((token)=>{
            if(token){
                this.token=token;
                console.log(this.token)
                let header = new Headers();
                header.append('Content-Type', 'application/json');
                header.append('Accept','Application/json');
                header.append('Authorization', 'Bearer '+ this.token);
                this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
                    this.datasiswa = datas.data;
                    this.namasiswa = datas.data.name;
                    this.photoside = datas.data.photo;
                    this.idsiswa   = datas.data.id;
                    this.idortu    = datas.dataortu;
                    this.idkelas   = datas.data.id_kelas;
                    this.tujuan    = datas.akses;
                    console.log(datas);

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
        let loader = this.loading.create({
            content: 'Mohon tunggu..!!',
            //duration: 1000
        });
        loader.present().then(()=>{

           
                this.storage.clear();
                this.cache.clearAll();
           
                this.app.getRootNav().setRoot(Login);
                setTimeout(window.location.reload.bind(window.location), 250);
                
           
        })
        loader.dismiss();

    }



}