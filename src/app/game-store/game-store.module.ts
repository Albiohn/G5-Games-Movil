import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameStorePageRoutingModule } from './game-store-routing.module';

import { GameStorePage } from './game-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameStorePageRoutingModule
  ],
  declarations: [GameStorePage]
})
export class GameStorePageModule {}
