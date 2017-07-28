import { Component } from '@angular/core';
import { NavController, NavParams,
  MenuController, LoadingController, AlertController, Events} from 'ionic-angular';
  import {TabsPage} from '../tabs/tabs';
  import {Http, Headers} from '@angular/http';
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
   url:any='http://pantausiswa.xyz/api/ambilsiswa/datasiswa';
   token:any;
   datasiswa:any;
   photoside:any;
   namaside:any;
   constructor(public navCtrl: NavController,
     public navParams: NavParams, public menu:MenuController,
     public http:Http, public loading: LoadingController,
     public alert:AlertController, public storage: Storage, public events: Events
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

           this.token = response.json().token;
           console.log(this.token)
           let header = new Headers();
           header.append('Content-Type', 'application/json');
           header.append('Accept','Application/json');
           header.append('Authorization', 'Bearer '+ this.token);
           this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
             console.log(datas);
             this.namaside = datas.data.name;
             this.photoside = datas.data.photo;
             this.events.publish('username:changed', this.namaside);
             this.events.publish('photo:changed', this.photoside);
             this.masuk({
               name:this.namaside,
               photo:this.photoside
             })
             this.navCtrl.setRoot(TabsPage)
           });
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

   masuk(data){
     console.log('tes')
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
