import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaesPainelComponent } from './caes-painel/caes-painel.component';
import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { FormsModule } from '@angular/forms';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaesPainelComponent,
    AreaRestritaComponent,
    AdminpanelComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
