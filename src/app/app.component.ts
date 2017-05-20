import { Component,ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Profil } from '../pages/profil/profil';
import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav:Nav;
    rootPage = Login;

    pages:Array<{title: string, component:any}>;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });

        this.pages=[
            {title: 'Beranda', component:TabsPage},
            {title:'Profil', component:Profil}
        ];
    }

    openPage(page){
        this.nav.setRoot(page.component);
    }
}
