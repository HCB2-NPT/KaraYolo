import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { KaraYolo } from './app.component';

import { MusicPage } from '../pages/music/music';
import { FavoritePage } from '../pages/favorite/favorite';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MorePage } from '../pages/more/more';
import { GenresPage } from '../pages/genres/genres';
import { SearchPage } from '../pages/search/search';
import { DetailPage } from '../pages/detail/detail';
import { SearchDetailsPage } from '../pages/search-details/search-details';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@NgModule({
    declarations: [
        KaraYolo,
        MusicPage,
        FavoritePage,
        DashboardPage,
        MorePage,
        GenresPage,
        SearchPage,
        SearchDetailsPage,
        DetailPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(KaraYolo, {
            mode: 'ios'
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        KaraYolo,
        MusicPage,
        FavoritePage,
        DashboardPage,
        MorePage,
        GenresPage,
        SearchPage,
        SearchDetailsPage,
        DetailPage,
        TabsPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        GoogleAnalytics,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
