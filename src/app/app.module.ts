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

@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
