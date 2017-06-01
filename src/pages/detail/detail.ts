import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

import { Genres } from '../../assets/Genres';
import { Songs } from '../../assets/Songs';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})

export class DetailPage {
    song: object

    constructor(public navController: NavController,
            public toastController: ToastController,
            private navParams: NavParams) {
        this.navController = navController;
        this.toastController = toastController;
        this.navParams = navParams;

        this.init();
    }

    presentToast(e) {
        let toast = this.toastController.create({
            message: 'Song was added successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }

    init() {
        let songs = new Songs();
        this.song = songs.getSongs().find(this.findSong.bind(this));
    }

    findSong(song) {
        return (this.navParams.get('songID') === song.id);
    }
}
