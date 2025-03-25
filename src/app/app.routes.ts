import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { IniciarsesionComponent } from './components/auth/iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    {path: 'iniciarsesion', component: IniciarsesionComponent},
    {path: 'registrarse', component: RegistrarseComponent},
    
    { path: '**', component: ErrorComponent },
    // { path: '', redirectTo: 'error' },
];
