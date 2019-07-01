import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RaitingComponent } from './components/raiting/raiting.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: 'filter', component:FilterComponent},
  { path: 'mapa', component: MapaComponent},
  { path: 'raiting', component:RaitingComponent},
  { path:'', pathMatch:'full', redirectTo:'home'},
  { path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
