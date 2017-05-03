import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-genres',
    templateUrl: 'genres.html'
})

export class GenresPage {
    genres = [
        {
            name: 'All',
            image: 'assets/img/KaraYolo.png',
            selected: true
        },
        {
            name: 'Bolero',
            image: 'assets/img/bolero.jpg',
            selected: false
        },
        {
            name: 'Cai Luong (Reformed Theatre)',
            image: 'assets/img/cai-luong.jpg',
            selected: false
        },
        {
            name: 'Pop & Ballads',
            image: 'assets/img/pop-ballads.jpg',
            selected: false
        },
        {
            name: 'Rap',
            image: 'assets/img/rap.jpg',
            selected: false
        },
        {
            name: 'Trinh Cong Son',
            image: 'assets/img/trinh-cong-son.jpg',
            selected: false
        },
        {
            name: 'US-UK',
            image: 'assets/img/us-uk.jpg',
            selected: false
        }
    ];

    constructor(public navController: NavController) {
        this.navController = navController;
    }

    back() {
        this.navController.pop();
    }

}
