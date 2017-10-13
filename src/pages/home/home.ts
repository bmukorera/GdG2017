import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseLoggerProvider } from "../../providers/firebase-logger/firebase-logger";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private firebaselogger: FirebaseLoggerProvider) {
        this.firebaselogger.logEvent("welcome","app_open");
  }

}
