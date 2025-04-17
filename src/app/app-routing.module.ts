import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { JuegoListComponent } from './juego-list/juego-list.component';
import { AccionComponent } from './accion/accion.component';
import { AventuraComponent } from './aventura/aventura.component';
import { RolComponent } from './rol/rol.component';
import { ShooterComponent } from './shooter/shooter.component';
import { TerrorComponent } from './terror/terror.component';
import { RPGComponent } from './rpg/rpg.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { GameListComponent } from './game-list/game-list.component';
import { VideosComponent } from './videos/videos.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'juegos',
    component: JuegoListComponent,
    
  },
  {
    path: 'accion',
    component: AccionComponent,
    
  },
  {
    path: 'aventura',
    component: AventuraComponent,
    
  },
  {
    path: 'rol',
    component: RolComponent,
    
  },
  {
    path: 'shooter',
    component: ShooterComponent,
    
  },
  {
    path: 'terror',
    component: TerrorComponent,
    
  },
  {
    path: 'rpg',
    component: RPGComponent,
    
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'game-store',
    loadChildren: () => import('./game-store/game-store.module').then(m => m.GameStorePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule)
  },
  {
    path: 'perfil',
    component: PerfilUsuarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'game-list',
    component: GameListComponent,
   
  },
  {
    path: 'videos',
    component: VideosComponent,
    
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
