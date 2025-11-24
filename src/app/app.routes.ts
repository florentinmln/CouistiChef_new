import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },
  {
    path:'',
    redirectTo:'recettes',
    pathMatch: 'full',
  },
  {
    path: 'recettes',
    loadComponent: () => import('./views/recettes/recettes.page').then( m => m.RecettesPage)
  },
  {
    path: 'recipe/:name',
    loadComponent: () => import('./views/recipe/recipe.page').then( m => m.RecipePage)
  },
  {
    path: 'revenue-modification/:name',
    loadComponent: () => import('./views/revenue-modification/revenue-modification.page').then( m => m.RevenueModificationPage)
  },
];
