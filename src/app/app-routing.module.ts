import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CaesPainelComponent } from './caes-painel/caes-painel.component';
import {AreaRestritaComponent} from './area-restrita/area-restrita.component';
import {AdminpanelComponent} from './adminpanel/adminpanel.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'caes', component: CaesPainelComponent},
  {path: 'arearestrita', component: AreaRestritaComponent},
  {path: 'adminpanel', component: AdminpanelComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
