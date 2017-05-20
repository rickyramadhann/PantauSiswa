import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';

/**
 * Generated class for the Bacaberita page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bacaberita',
  templateUrl: 'bacaberita.html',
})
export class Bacaberita {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bacaberita');
  }
   ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu1');
  }

}
