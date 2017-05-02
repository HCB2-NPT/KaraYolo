import { Component } from '@angular/core';

import { MusicPage } from '../music/music';
import { FavoritePage } from '../favorite/favorite';
import { DashboardPage } from '../dashboard/dashboard';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  musicTabRoot = MusicPage;
  favoriteTabRoot = FavoritePage;
  dashboardTabRoot = DashboardPage;
  moreTabRoot = MorePage;

  constructor() {

  }
}
