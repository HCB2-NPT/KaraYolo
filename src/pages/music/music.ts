import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
    selector: 'page-music',
    templateUrl: 'music.html',
})

export class MusicPage {
    category: string = 'new'
    newSongs = [
        {
            name: "Anh Nhớ Em Nhiều",
            artist: "Ưng Đại Vệ ft Lil' Knight",
            image: "http://zmp3-photo.d.za.zdn.vn/thumb/240_240/covers/f/2/f258a18a0de72ca0aa936bb556b69ad2_1394013064.jpg",
        },
        {
            name: "Anh Vẫn Chờ",
            artist: "Zolek ft Mike",
            image: "https://media.foody.vn/usr/g9/89090/avt/c200x200/foody-avatar-775-636141399044323217.jpg",
        },
        {
            name: "Cô Gái Bàn Bên",
            artist: "Đen ft Lynk Lee",
            image: "https://i1.sndcdn.com/avatars-000211368698-fl426k-t500x500.jpg",
        },
        {
            name: "Đợi",
            artist: "Nah ft B07",
            image: "https://2rap.vn/img/artist/nah.32.jpg",
        },
        {
            name: "Lớn Rồi",
            artist: "DSK",
            image: "https://i1.sndcdn.com/artworks-000126544167-483bme-t500x500.jpg",
        },
        {
            name: "Mãi Không Trở Về",
            artist: "Nguyễn Thắng",
            image: "https://a1-images.myspacecdn.com/images03/29/225cb08d20c5488dae981b020b95dbd8/300x300.jpg",
        },
        {
            name: "Mất Nhau Từ Đây",
            artist: "Andy Quách ft MasOul",
            image: "https://rs172.pbsrc.com/albums/w20/tonydaconcop/andyquach.png~c200",
        },
        {
            name: "No Promise",
            artist: "Shayne Ward",
            image: "http://images.contactmusic.com/newsimages/shayne_ward_1191760.jpg",
        }
    ]

    constructor(public navController: NavController) {
        this.navController = navController;
    }

    searchSongs(e) {
        this.navController.push(SearchPage);
    }
}
