import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Firebase } from '@ionic-native/firebase';

/*
  Generated class for the FirebaseLoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseLoggerProvider {

  constructor(public http: Http,private firebase:Firebase) {
    console.log('Hello FirebaseLoggerProvider Provider');
  }

  logEvent(tag,event){
    this.firebase.logEvent(tag,event).then();
}


}
