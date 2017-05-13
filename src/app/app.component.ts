import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class KaraYolo {
    rootPage:any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, ga: GoogleAnalytics) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();

            ga.startTrackerWithId('UA-66016963-3').then(() => {
                console.log('Google analytics is ready now');
                ga.trackView('dashboard');
                ga.trackView('detail');
                ga.trackView('favorite');
                ga.trackView('genres');
                ga.trackView('more');
                ga.trackView('music');
                ga.trackView('search');
                ga.trackView('search-details');
            }).catch((e) => {
                console.error('Error starting GoogleAnalytics', e)
            });
        });
    }
}
