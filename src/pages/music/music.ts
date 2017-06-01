import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
            private storage: Storage) {
        this.navController = navController;
        this.toastController = toastController;
        this.storage = storage;

        let songs = new Songs();
        this.newSongs = songs.getSongs().slice(0, 10);
        this.hotSongs = songs.getSongs().slice(10);
    }

    searchSongs(e) {
        this.navController.push(SearchPage);
    }

    findByGenres(e) {
        this.navController.push(GenresPage);
    }

    showDetail(songID) {
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
            let toast = this.toastController.create({
                message: 'Song was added successfully',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();

            this.storage.get('playlist').then((playlist) => {
                playlist.push(songID);
                this.storage.set('playlist', playlist);
            });
        }
    }
}
