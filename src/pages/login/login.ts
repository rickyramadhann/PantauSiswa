import { Component } from '@angular/core';
import { NavController, NavParams,
  MenuController, LoadingController, AlertController} from 'ionic-angular';
  import {TabsPage} from '../tabs/tabs';
  import {Http} from '@angular/http';
  import 'rxjs/add/operator/toPromise';
  import { Storage } from '@ionic/storage';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
   selector: 'page-login',
   templateUrl: 'login.html',
 })
 export class Login {

   public user = {
     email: '',
     password: '',

   };

   
   public type= "password";

   public showPass = false;

   constructor(public navCtrl: NavController,
     public navParams: NavParams, public menu:MenuController,
     public http:Http, public loading: LoadingController,
     public alert:AlertController, public storage: Storage
     ) {
   }



   login(){
     if(this.user.email ===''||this.user.password===''){
       let alert = this.alert.create({
         title: 'warning',
         subTitle: 'Email dan password tidak boleh kosong',
         buttons: ['ok']
       });
       alert.present();
     }
     else{
       let loader = this.loading.create({
         content: 'Mohon tunggu..!!',
         //duration: 1000
       });
       loader.present().then(()=>{
         this.http.post('http://pantausiswa.xyz/api/login',this.user)
         .toPromise().then((response)=>{


           this.storage.remove('email');
           this.storage.set('token', response.json().token) ;
           this.storage.set('email', this.user.email);
           console.log(response.json().token);
           //this.storage.set('email', this.user.email).then(()=> {console.log('Stored in localStorage '+ this.user.email)});
           console.log('email dari login ='+this.user.email);
           

           this.navCtrl.setRoot(TabsPage);
           loader.dismiss();
         },error=> {
           let alert = this.alert.create({
             title: 'warning',
             subTitle: 'Email atau kata sandi tidak sesuai',
             buttons: ['ok']
           });
           alert.present();
           loader.dismiss();
         });
       });
     }
   }


   ionViewDidEnter(){
     this.menu.swipeEnable(false,'menu1');
   }

   showPassword()
   {
     this.showPass = !this.showPass;
     if (this.showPass){
       this.type = "text";
     }
     else {
       this.type = "password";
     }
   }


   ionViewDidLoad() {

   }

 }
