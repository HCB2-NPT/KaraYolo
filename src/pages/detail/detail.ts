import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

    constructor(public navCtrl: NavController) {
        console.log(this.song);
    }

}
