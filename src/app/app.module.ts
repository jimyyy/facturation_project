import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FeaturesComponent } from './components/features/features.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddfacturComponent } from './components/addfactur/addfactur.component';
import { AdddevisComponent } from './components/adddevis/adddevis.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { AddcongesComponent } from './components/addconges/addconges.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { DashboardemployeComponent } from './components/dashboardemploye/dashboardemploye.component';
import { HttpClientModule } from '@angular/common/http';
import { InterfaceadminComponent } from './components/interfaceadmin/interfaceadmin.component';
import { InterfaceemployeComponent } from './components/interfaceemploye/interfaceemploye.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    FeaturesComponent,
    TeamComponent,
    NewsComponent,
    SignupComponent,
    LoginComponent,
    AddfacturComponent,
    AdddevisComponent,
    AddemployeComponent,
    AddcongesComponent,
    DashboardadminComponent,
    DashboardemployeComponent,
    InterfaceadminComponent,
    InterfaceemployeComponent,
    AddadminComponent,
    TeamsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
