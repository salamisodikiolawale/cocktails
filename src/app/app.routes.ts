import { Routes } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailComponent } from './cocktail-container/cocktail-detail/cocktail-detail.component';
import { CococktailFormComponent } from './cococktail-form/cococktail-form.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: 'new', component: CococktailFormComponent },
      {
        path: ':index',
        component: CocktailDetailComponent,
      },
      {
        path: ':index/edit',
        component: CococktailFormComponent,
      },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  { path: 'panier', component: PanierContainerComponent },
];
