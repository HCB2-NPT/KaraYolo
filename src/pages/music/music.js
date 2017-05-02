var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { GenresPage } from '../genres/genres';
var MusicPage = (function () {
    function MusicPage(navController) {
        this.navController = navController;
        this.category = 'new';
        this.newSongs = [
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
        ];
        this.hotSongs = [
            {
                name: "Anh Cứ Đi Đi",
                artist: "Hariwon",
                image: "http://eva-img.24hstatic.com/upload/4-2016/images/2016-11-24/profile_image_180x180/1479980494-hari-won.jpg",
            },
            {
                name: "Bóng Người Trong Mưa",
                artist: "Cát Tiên",
                image: "https://a1-images.myspacecdn.com/images03/31/bb606af4ca024ed1afb3059d17f883e8/300x300.jpg",
            },
            {
                name: "Cát Bụi",
                artist: "Khánh Ly",
                image: "http://zmp3-photo-td.zadn.vn/avatars/1/a/1afa53ae43356857d3c1b1bd0dca07a9_1402295031.jpg",
            },
            {
                name: "Đến Sau",
                artist: "Ưng Hoàng Phúc",
                image: "http://avatar.nct.nixcdn.com/playlist/2014/07/18/9/d/0/4/1405656426609_500.jpg",
            },
            {
                name: "Lạc Trôi",
                artist: "Sơn Tùng MTP",
                image: "http://avatar.nct.nixcdn.com/playlist/2017/02/24/3/e/a/e/1487928635962_500.jpg",
            },
            {
                name: "Một Mai Giã Từ Vũ Khí",
                artist: "Duy Khánh",
                image: "",
            },
            {
                name: "Nơi Này Có Anh",
                artist: "Sơn Tùng MTP",
                image: "http://avatar.nct.nixcdn.com/playlist/2017/02/24/3/e/a/e/1487928635962_500.jpg",
            },
            {
                name: "Phía Sau Một Cô Gái",
                artist: "Soobin Hoàng Sơn",
                image: "https://hopamchuan.com/node/get_artist_image/soobin_hoang_son",
            }
        ];
        this.navController = navController;
    }
    MusicPage.prototype.searchSongs = function (e) {
        this.navController.push(SearchPage);
    };
    MusicPage.prototype.findByGenres = function (e) {
        this.navController.push(GenresPage);
    };
    return MusicPage;
}());
MusicPage = __decorate([
    Component({
        selector: 'page-music',
        templateUrl: 'music.html',
    }),
    __metadata("design:paramtypes", [NavController])
], MusicPage);
export { MusicPage };
//# sourceMappingURL=music.js.map