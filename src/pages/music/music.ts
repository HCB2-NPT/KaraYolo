import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { Songs } from '../../assets/Songs';

import { SearchPage } from '../search/search';
import { GenresPage } from '../genres/genres';
import { DetailPage } from '../detail/detail';

@Component({
    selector: 'page-music',
    templateUrl: 'music.html',
})

export class MusicPage {
    category: string = 'new'
    newSongs: any
    hotSongs: any

    constructor(public navController: NavController,
            public toastController: ToastController,
            private storage: Storage,
            private ga: GoogleAnalytics) {
        this.navController = navController;
        this.toastController = toastController;
        this.storage = storage;
        this.ga = ga;

        let songs = new Songs();
        this.newSongs = songs.getSongs().slice(0, 10);
        this.hotSongs = songs.getSongs().slice(10);
    }

    searchSongs(e) {
        this.ga.trackEvent('Music', 'searchSongs', 'Go to Search Page');
        this.navController.push(SearchPage);
    }

    findByGenres(e) {
        this.ga.trackEvent('Music', 'findByGenres', 'Go to Genres Page');
        this.navController.push(GenresPage);
    }

    showDetail(songID) {
        this.ga.trackEvent('Music', 'presentToast', 'Show details');
        this.navController.push(DetailPage, {
            songID: songID
        });
    }

    presentToast(e, songID) {
        e.preventDefault();

        let target = e.target;
        if (target.tagName === 'BUTTON') {
            this.showDetail(songID);
        } else {
            this.ga.trackEvent('Music', 'presentToast', 'Add song into playlist');

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
    }
}
