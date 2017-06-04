import { Component } from '@angular/core';
import { NavController,App,MenuController } from 'ionic-angular';
import { Isimapel } from '../isimapel/isimapel';
import { Notifikasi } from '../notifikasi/notifikasi';

/**
 * Generated class for the Matpel page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-matpel',
  templateUrl: 'matpel.html',
})
export class Matpel {

  data:Array<{guru:string, matpel:string, jadwal:string}>;

  constructor(public navCtrl: NavController, public app:App, public menu:MenuController) {
    this.data=[
      {guru:'Drs. Guru 1', matpel:'Matematika',jadwal:'Kamis, 08.00-09.00'},
      {guru:'Drs. Guru 2', matpel:'Bahasa Indonesia',jadwal:'Kamis, 08.00-09.00'},
      {guru:'Drs. Guru 3', matpel:'Bahasa Inggris',jadwal:'Kamis, 08.00-09.00'},
      {guru:'Drs. Guru 4', matpel:'Fisika',jadwal:'Kamis, 08.00-09.00'},
      {guru:'Drs. Guru 5', matpel:'Kimia',jadwal:'Kamis, 08.00-09.00'},
      {guru:'Drs. Guru 6', matpel:'Biologi',jadwal:'Kamis, 08.00-09.00'},
      {guru:'Drs. Guru 7', matpel:'Pendidikan Kewarganegraan',jadwal:'Kamis, 08.00-09.00'},
      {guru:'Drs. Guru 8', matpel:'Agama',jadwal:'Kamis, 08.00-09.00'}
    ]
  }

  keisimapel(){
    this.app.getRootNav().push(Isimapel);

  }


  kenotifikasi(){
    this.app.getRootNav().push(Notifikasi);
  
  }

  ionViewDidEnter(){
  this.menu.swipeEnable(true,'menu1');
  }

}
