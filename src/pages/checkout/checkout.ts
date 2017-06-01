import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { DashboardPage } from '../dashboard/dashboard';
import { MusicPage } from '../music/music';

@Component({
    selector: 'page-checkout',
    templateUrl: 'checkout.html'
})

export class CheckoutPage {

    constructor(public navController: NavController,
            public toastController: ToastController,
            private storage: Storage,
            private ga: GoogleAnalytics) {
        this.navController = navController;
        this.toastController = toastController;
        this.storage = storage;
        this.ga = ga;
    }

    goToDashboard(e) {
        this.ga.trackEvent('Checkout', 'goToDashboard', 'Back to Dashboard');
        this.navController.push(DashboardPage);
    }

    accept(e) {
        this.ga.trackEvent('Checkout', 'accept', 'Checkout session');
        this.storage.clear();

        let toast = this.toastController.create({
            message: 'Checkout successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();

        setTimeout(() => {
            this.navController.push(MusicPage);
        }, 1500);
    }
}
