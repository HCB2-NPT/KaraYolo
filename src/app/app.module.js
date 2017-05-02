var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MusicPage } from '../pages/music/music';
import { FavoritePage } from '../pages/favorite/favorite';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MorePage } from '../pages/more/more';
import { GenresPage } from '../pages/genres/genres';
import { SearchPage } from '../pages/search/search';
import { SearchDetailsPage } from '../pages/search-details/search-details';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            MusicPage,
            FavoritePage,
            DashboardPage,
            MorePage,
            GenresPage,
            SearchPage,
            SearchDetailsPage,
            TabsPage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp, {
                mode: 'ios'
            }),
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            MusicPage,
            FavoritePage,
            DashboardPage,
            MorePage,
            GenresPage,
            SearchPage,
            SearchDetailsPage,
            TabsPage,
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map