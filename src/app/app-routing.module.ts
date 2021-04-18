import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lanche',
    loadChildren: () => import('./lanche/lanche.module').then( m => m.LanchePageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./sobremesa/sobremesa.module').then( m => m.SobremesaPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'pratos',
    loadChildren: () => import('./pratos/pratos.module').then( m => m.PratosPageModule)
  },
  {
    path: 'pratodia',
    loadChildren: () => import('./pratodia/pratodia.module').then( m => m.PratodiaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
