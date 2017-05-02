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
            image: 'assets/img/KaraYolo.png'
        },
        {
            name: 'Bolero',
            image: 'assets/img/bolero.jpg'
        },
        {
            name: 'Cai Luong (Reformed Theatre)',
            image: 'assets/img/cai-luong.jpg'
        },
        {
            name: 'Pop & Ballads',
            image: 'assets/img/pop-ballads.jpg'
        },
        {
            name: 'Rap',
            image: 'assets/img/rap.jpg'
        },
        {
            name: 'Trinh Cong Son',
            image: 'assets/img/trinh-cong-son.jpg'
        },
        {
            name: 'US-UK',
            image: 'assets/img/us-uk.jpg'
        }
    ];

    constructor(public navController: NavController) {
        this.navController = navController;
    }

    back() {
        this.navController.pop();
    }

}
