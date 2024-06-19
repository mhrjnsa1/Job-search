import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
   
    {path:'jobs',component:JobsComponent },
    {path:'jobs/details/:id',component:DetailsComponent},
    {path:'favorites',component:FavoritesComponent},
    {path:'',redirectTo:'jobs',pathMatch:'full'},
    {path:'**',redirectTo:'jobs'}
];

