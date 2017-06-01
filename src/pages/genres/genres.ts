import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-genres',
    templateUrl: 'genres.html'
})

export class GenresPage {
    genres = [
        {
            id: 1,
            name: 'All',
            image: 'assets/img/KaraYolo.png',
            selected: true
        },
        {
            id: 2,
            name: 'Bolero',
            image: 'assets/img/bolero.jpg',
            selected: false
        },
        {
            id: 3,
            name: 'Cai Luong (Reformed Theatre)',
            image: 'assets/img/cai-luong.jpg',
            selected: false
        },
        {
            id: 4,
            name: 'Pop & Ballads',
            image: 'assets/img/pop-ballads.jpg',
            selected: false
        },
        {
            id: 5,
            name: 'Rap - R&B',
            image: 'assets/img/rap.jpg',
            selected: false
        },
        {
            id: 6,
            name: 'Trinh Cong Son',
            image: 'assets/img/trinh-cong-son.jpg',
            selected: false
        },
        {
            id: 7,
            name: 'US-UK',
            image: 'assets/img/us-uk.jpg',
            selected: false
        }
    ]

    constructor(public navController: NavController,
            private storage: Storage,
            private ga: GoogleAnalytics) {
        this.navController = navController;
        this.storage = storage;
        this.ga = ga;

        this.init();
    }

    init() {
        this.storage.get('selectedGenre').then((genreID) => {
            if (genreID) {
                this.genres.map((genre) => {
                    genre.selected = false;

                    if (genreID === genre.id) {
                        genre.selected = true;
                    }
                });
            } else {
                this.storage.set('selectedGenre', 1);
            }
        });
    }

    back() {
        this.ga.trackEvent('Genres', 'back', 'Back to Music Page');
        this.navController.pop();
    }

    selectGenre(genreID) {
        this.ga.trackEvent('Genres', 'selectGenre', 'Select genre');
        this.genres.map((genre) => {
            genre.selected = false;

            if (genreID === genre.id) {
                genre.selected = true;
                this.storage.set('selectedGenre', genreID);
            }
        });
    }

}
