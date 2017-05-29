import { Component,ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Profil } from '../pages/profil/profil';
import { Login } from '../pages/login/login';
import { Matpel } from '../pages/matpel/matpel';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav:Nav;
    rootPage : any;
    user={
        email:""
    }

    pages:Array<{title: string, component:any}>;
    constructor(platform: Platform, statusBar: StatusBar, 
        splashScreen: SplashScreen, public storage:Storage, public http:Http) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();


            storage.get("email").then((email)=>{
                if(email == null){
                    window.localStorage.clear();
                    this.rootPage = Login;
                }
                else{
                    this.user.email = email;
                    this.rootPage = TabsPage;
                    console.log(this.user.email);

                }
            })
        });

        this.pages=[
        {title: 'Beranda', component:TabsPage},
        {title:'Profil', component:Profil},
        {title:'Mata Pelajaran', component:Matpel}
        ];
    }

    
    openPage(page){
        this.nav.setRoot(page.component);
    }

    logout()
    {
        window.localStorage.clear();
        this.storage.remove("email");
        console.log("storage dihapus "+ this.user.email);
        this.nav.setRoot(Login);
    }

}
