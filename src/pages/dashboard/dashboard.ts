import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { Songs } from '../../assets/Songs';

import { CheckoutPage } from '../checkout/checkout';

@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html'
})

export class DashboardPage {
    private playlist = []

    constructor(public navController: NavController,
            private storage: Storage,
            private ga: GoogleAnalytics) {
        this.navController = navController;
        this.storage = storage;
        this.ga = ga;

        this.init();
    }

    init() {
        this.storage.get('playlist').then((playlist) => {
            let songs = new Songs();
            let song;
            this.playlist = [];

            if (playlist) {
                playlist.map((id) => {
                    song = songs.getSongs().find((_song) => {
                        return (id === _song.id);
                    });

                    this.playlist.push(song);
                });
            }
        });
    }

    removeSong(index) {
        this.playlist.splice(index, 1);
        this.storage.set('playlist', this.playlist);
        this.ga.trackEvent('Dashboard', 'removeSong', 'Remove song from playlist');
    }

    reorderItems(indexes) {
        this.playlist = reorderArray(this.playlist, indexes);
        this.storage.set('playlist', this.playlist);
        this.ga.trackEvent('Dashboard', 'reorderItems', 'Reorder items in playlist');
    }

    checkout(e) {
        this.ga.trackEvent('Dashboard', 'checkout', 'Go to Checkout Page');
        this.navController.push(CheckoutPage);
    }
}
