import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then(m => m.PlayPageModule)
  },
  {
    path: 'informace',
    loadChildren: () => import('./informace/informace.module').then( m => m.InformacePageModule)
  },
  {
    path: 'nastav',
    loadChildren: () => import('./nastav/nastav.module').then( m => m.NastavPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'mandala',
    loadChildren: () => import('./mandala/mandala.module').then( m => m.MandalaPageModule)
  },
  {
    path: 'konec',
    loadChildren: () => import('./konec/konec.module').then( m => m.KonecPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
