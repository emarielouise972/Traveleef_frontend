import { Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { RechercheVoyagesComponent } from './recherche-voyages/recherche-voyages.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {
        path:'page-accueil',
        component:PageAccueilComponent,
    },
    {
        path:'recherche-voyages',
        component:RechercheVoyagesComponent
    },
    {
        path:'detail',
        component:DetailComponent
    }
];
