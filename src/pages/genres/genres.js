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
var GenresPage = (function () {
    function GenresPage(navController) {
        this.navController = navController;
        this.genres = [
            {
                name: 'All',
                image: 'KaraYolo.png'
            },
            {
                name: 'Bolero',
                image: 'bolero.jpg'
            },
            {
                name: 'Cai Luong (Reformed Theatre)',
                image: 'cai-luong.jpg'
            },
            {
                name: 'Pop & Ballads',
                image: 'pop-ballads.jpg'
            },
            {
                name: 'Rap',
                image: 'rap.jpg'
            },
            {
                name: 'Trinh Cong Son',
                image: 'trinh-cong-son.jpg'
            },
            {
                name: 'US-UK',
                image: 'us-uk.jpg'
            }
        ];
        this.navController = navController;
    }
    GenresPage.prototype.back = function () {
        this.navController.pop();
    };
    return GenresPage;
}());
GenresPage = __decorate([
    Component({
        selector: 'page-genres',
        templateUrl: 'genres.html'
    }),
    __metadata("design:paramtypes", [NavController])
], GenresPage);
export { GenresPage };
//# sourceMappingURL=genres.js.map