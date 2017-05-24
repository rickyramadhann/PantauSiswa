import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
        MenuController, LoadingController, AlertController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public user = {
    email: '',
    password: ''
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public menu:MenuController,
    public http:Http, public loading: LoadingController,
    public alert:AlertController) {


  }



  login(){
       this.http.post('http://localhost:8000/api/login',this.user)
      .toPromise().then((response)=>{
       let loader = this.loading.create({
        content: "Mohon Tunggu..!!",
        duration: 1000
      });
      loader.present();
       window.localStorage['token'] = response.json().token;
       this.navCtrl.setRoot(TabsPage);

      },error=>{
        let alert = this.alert.create({
        title: 'Warning',
        subTitle: 'salah password dan username',
        buttons: ['ok']
        });
        alert.present();

      });
  }

  ionViewDidEnter(){
  this.menu.swipeEnable(false,'menu1');
  }


  ionViewDidLoad() {

  }

}
