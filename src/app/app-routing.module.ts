import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAccessComponent } from './components/common/no-access/no-access.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AdminAuthGuard } from './services/guards/admin-auth.guard';
import { SignupComponent } from './components/login/signup.component';

import { CitasComponent } from './components/citas/citas.component';
import { CitaComponent } from './components/citas/cita.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard, AdminAuthGuard] 
  },
  // { path: 'admin', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'cita', component: CitaComponent },
  { path: 'no-access', component: NoAccessComponent },
  // { path: '**', redirectTo: '/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
