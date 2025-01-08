import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsultActivitieComponent } from './consult-activitie/consult-activitie.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'accueil', component: HomeComponent},
    {path: 'toto.html', component: HomeComponent} ,   
    {path: 'about.html', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'consult/:numAct', component: ConsultActivitieComponent},
    {path: 'about/:toto/:titi', component: AboutComponent},
    {path: 'about/:toto', component: AboutComponent}

    


];
