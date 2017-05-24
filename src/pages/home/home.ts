import { Component } from '@angular/core';
import { NavController,App,MenuController } from 'ionic-angular';
import { Isimapel } from '../isimapel/isimapel';
import { Notifikasi } from '../notifikasi/notifikasi';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:Array<{guru:string, matpel:string}>;

  constructor(public navCtrl: NavController, public app:App, public menu:MenuController) {
    this.data=[
      {guru:'Drs. Guru 1', matpel:'Matematika'},
      {guru:'Drs. Guru 2', matpel:'Bahasa Indonesia'},
      {guru:'Drs. Guru 3', matpel:'Bahasa Inggris'},
      {guru:'Drs. Guru 4', matpel:'Fisika'},
      {guru:'Drs. Guru 5', matpel:'Kimia'},
      {guru:'Drs. Guru 6', matpel:'Biologi'},
      {guru:'Drs. Guru 7', matpel:'Pendidikan Kewarganegraan'},
      {guru:'Drs. Guru 8', matpel:'Agama'}
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
