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
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard, AdminAuthGuard] 
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'cita/:id', component: CitaComponent },
  { path: 'no-access', component: NoAccessComponent },
  // { path: '**', redirectTo: '/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
