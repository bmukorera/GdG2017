import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  adMobId: any;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admobFree: AdMobFree,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if (this.platform.is('android')) {
      this.adMobId = {
          banner: "ca-app-pub-xxxxxxxxx/xxxxxxxxx",
          interstitial: "ca-app-pub-xxxxxxxxxxxx/xxxxxxxxxx"
      };
      this.showAdmobBannerAds();
  }
  else if (this.platform.is('ios')) {
      this.adMobId = {
        banner: "ca-app-pub-xxxxxxxxx/xxxxxxxxx",
        interstitial: "ca-app-pub-xxxxxxxxxxxx/xxxxxxxxxx"
      }
  }

  }

 
//Intialise banner Ads
  showAdmobBannerAds() {
    
    const bannerConfig: AdMobFreeBannerConfig = {
         id: this.adMobId.banner,
         isTesting:true,
        autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
        .then(() => {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
};
  

}

