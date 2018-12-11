import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },

    { path: 'usuarios', component: UsuariosComponent },

    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'register', component: RegistroComponent },
    { path: 'main', component: CardsComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'register/:id', component: RegistroComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: 'list', component: ListComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
