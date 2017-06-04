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
    email: any;
    

    pages:Array<{title: string, component:any}>;
    constructor(public platform: Platform, statusBar: StatusBar, 
        public splashScreen: SplashScreen, public storage:Storage, public http:Http) {
        
        
        this.platform.ready().then(() => {
            this.splashScreen.hide();
            this.storage.get("email").then((email)=>{
                if(email){
                    this.email = email;
                    console.log('email dari component ='+this.email);
                    this.rootPage = TabsPage;

                }
                else{                
                    this.rootPage = Login;
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
        this.storage.remove('token');
        this.storage.remove('email');
        this.nav.setRoot(Login);
    }

    
}
