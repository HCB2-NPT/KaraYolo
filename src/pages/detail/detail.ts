import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { Songs } from '../../assets/Songs';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})

export class DetailPage {
    song: object

    constructor(public navController: NavController,
            public toastController: ToastController,
            private navParams: NavParams,
            private storage: Storage,
            private ga: GoogleAnalytics) {
        this.navController = navController;
        this.toastController = toastController;
        this.navParams = navParams;
        this.storage = storage;
        this.ga = ga;

        this.init();
    }

    presentToast(e, songID) {
        this.ga.trackEvent('Detail', 'presentToast', 'Add song into playlist');
        let toast = this.toastController.create({
            message: 'Song was added successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();

        this.storage.get('playlist').then((playlist) => {
            if (playlist) {
                playlist.push(songID);
            } else {
                playlist = [ songID ];
            }

            this.storage.set('playlist', playlist);
        });
    }

    init() {
        let songs = new Songs();
        this.song = songs.getSongs().find(this.findSong.bind(this));
    }

    findSong(song) {
        return (this.navParams.get('songID') === song.id);
    }
}
