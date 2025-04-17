import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameStorePage } from './game-store.page';

const routes: Routes = [
  {
    path: '',
    component: GameStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameStorePageRoutingModule {}
