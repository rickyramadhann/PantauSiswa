import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Lihatnilaik } from '../lihatnilaik/lihatnilaik';
import { Lihatnilaip } from '../lihatnilaip/lihatnilaip';
import { Lihatnilais } from '../lihatnilais/lihatnilais';
import { Lihatabsensi } from '../lihatabsensi/lihatabsensi';
import { Tugas } from '../tugas/tugas';
/**
 * Generated class for the Isimapel page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
   selector: 'page-isimapel',
   templateUrl: 'isimapel.html',
 })
 export class Isimapel {

   public nama:any;
   public name:any;
   public foto:any;
   constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController) {

     this.nama = this.navParams.get('nama');
     this.name = this.navParams.get('name');
     this.foto = this.navParams.get('photo')
   }

   ketugas(){
     this.navCtrl.push(Tugas,{
       nama:this.nama,
       name:this.name,
       foto:this.foto
     })
   }
   kenilaip(){
     this.navCtrl.push(Lihatnilaip,{
       nama:this.nama,
       name:this.name,
       foto:this.foto
     })
   }

   kenilaik(){
     this.navCtrl.push(Lihatnilaik,{
       nama:this.nama,
       name:this.name,
       foto:this.foto
     })
   }

   kenilais(){
     this.navCtrl.push(Lihatnilais,{
       nama:this.nama,
       name:this.name,
       foto:this.foto
     })
   }

   keabsensi(){
     this.navCtrl.push(Lihatabsensi,{
       nama:this.nama,
       name:this.name,
       foto:this.foto
     })
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Isimapel');
   }


   ionViewDidEnter(){
     this.menu.swipeEnable(false,'menu1');
   }

 }
