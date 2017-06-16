import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
// import { Observable } from "rxjs/Observable";
// import { NavController } from 'ionic-angular';

/*
  Generated class for the Localstorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginservice {

	public token: any;
  constructor(public http: Http, public storage:Storage) {
		
	}

 
}
