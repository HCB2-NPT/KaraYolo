import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})

export class DetailPage {
    song: object = {
        id: 6,
        name: "Mãi Không Trở Về",
        artist: "Nguyễn Thắng",
        image: "https://a1-images.myspacecdn.com/images03/29/225cb08d20c5488dae981b020b95dbd8/300x300.jpg",
    }

    constructor(public navController: NavController, public toastController: ToastController) {
        this.navController = navController;
        this.toastController = toastController;
    }

    presentToast(e) {
        let toast = this.toastController.create({
            message: 'Song was added successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }
}
