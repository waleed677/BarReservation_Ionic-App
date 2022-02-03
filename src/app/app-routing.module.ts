import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },

  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-next',
    loadChildren: () => import('./pages/register-next/register-next.module').then( m => m.RegisterNextPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./pages/search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'bars-list',
    loadChildren: () => import('./pages/bars-list/bars-list.module').then( m => m.BarsListPageModule)
  },
  {
    path: 'my-reservations',
    loadChildren: () => import('./pages/my-reservations/my-reservations.module').then( m => m.MyReservationsPageModule)
  },
  {
    path: 'reservation-form',
    loadChildren: () => import('./pages/reservation-form/reservation-form.module').then( m => m.ReservationFormPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
