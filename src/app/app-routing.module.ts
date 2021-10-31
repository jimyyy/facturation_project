import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { AddcongesComponent } from './components/addconges/addconges.component';
import { AdddevisComponent } from './components/adddevis/adddevis.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { AddfacturComponent } from './components/addfactur/addfactur.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { DashboardemployeComponent } from './components/dashboardemploye/dashboardemploye.component';
import { HomeComponent } from './components/home/home.component';
import { InterfaceadminComponent } from './components/interfaceadmin/interfaceadmin.component';
import { InterfaceemployeComponent } from './components/interfaceemploye/interfaceemploye.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'signup',component: SignupComponent},
  {path:'login',component: LoginComponent},
  {path:'addfactur',component: AddfacturComponent},
  {path:'adddevis',component: AdddevisComponent},
  {path:'addemploye',component: AddemployeComponent},
  {path:'addconges',component:AddcongesComponent},
  {path:'dashboardadmin',component:DashboardadminComponent},
  {path:'dashboardemploye',component:DashboardemployeComponent},
  {path:'interfaceadmin',component:InterfaceadminComponent},
  {path:'interfaceemploye',component:InterfaceemployeComponent},
  {path:'addadmin',component: AddadminComponent},
  {path:'team',component: TeamComponent},
  {path:'about',component: AboutComponent},




  {path:'editemploye/:id',component: AddemployeComponent},
  {path:'editfactur/:id',component: AddfacturComponent},
  {path:'editdevis/:id',component: AdddevisComponent},
  {path:'editconges/:id',component:AddcongesComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
