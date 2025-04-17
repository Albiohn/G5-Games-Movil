import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JuegoListComponent } from './juego-list/juego-list.component';
import { AccionComponent } from './accion/accion.component';
import { AventuraComponent } from './aventura/aventura.component';
import { RolComponent } from './rol/rol.component';
import { RPGComponent } from './rpg/rpg.component';
import { ShooterComponent } from './shooter/shooter.component';
import { TerrorComponent } from './terror/terror.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { GameListComponent } from './game-list/game-list.component';
import { RawgService } from './services/rawg.service';
import { VideosComponent } from './videos/videos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    JuegoListComponent,
    AccionComponent,
    AventuraComponent,
    RolComponent,
    RPGComponent,
    ShooterComponent,
    TerrorComponent,
    PerfilUsuarioComponent,
    GameListComponent,
    VideosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RawgService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
