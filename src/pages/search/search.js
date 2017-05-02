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
import { SearchDetailsPage } from '../search-details/search-details';
var SearchPage = (function () {
    function SearchPage(navController) {
        this.navController = navController;
        this.searchQuery = '';
        this.navController = navController;
        this.results = [
            {
                name: 'TOP SONGS',
                songs: [
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
                    }
                ]
            },
            {
                name: 'SONGS',
                songs: [
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
                    }
                ]
            },
            {
                name: 'ARTISTS',
                songs: [
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
            }
        ];
    }
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage.prototype.back = function () {
        this.navController.pop();
    };
    SearchPage.prototype.more = function (category) {
        this.navController.push(SearchDetailsPage);
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Component({
        selector: 'page-search',
        templateUrl: 'search.html'
    }),
    __metadata("design:paramtypes", [NavController])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.js.map