import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';

/**
 * Generated class for the Bacapengumuman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bacapengumuman',
  templateUrl: 'bacapengumuman.html',
})
export class Bacapengumuman {
  public title:any;
  public content:any;
  public created_at:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.title = navParams.get('title');
    this.content = navParams.get('content');
    this.created_at = navParams.get('created_at');
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bacaberita');
  }
   ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu1');
  }

}