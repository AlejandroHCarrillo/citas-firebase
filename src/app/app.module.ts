import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from '../app/services/chat.service';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CitasComponent } from './components/citas/citas.component';
import { NoAccessComponent } from './components/common/no-access/no-access.component';
import { SignupComponent } from './components/login/signup.component';
import { AuthService } from './services/auth.service';
import { CitaComponent } from './components/citas/cita.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
// import { AuthGuard } from './services/guards/auth.guard';
// import { AdminAuthGuard } from './services/guards/admin-auth.guard';
// import { AuthHttp } from 'angular2-jwt';
// import { authHttpServiceFactory } from './components/common/auth-http.service-factory';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    LoginComponent,
    AdminComponent,
    CitasComponent,
    NoAccessComponent,
    SignupComponent,
    CitaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),  // imports firebase/app needed for everything
    AngularFirestoreModule,                                 // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,                                  // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,                               // imports firebase/storage only needed for storage features


    AngularFireDatabaseModule,
    // AngularFireModule.initializeApp (environment.firebase),
    // AngularFirestoreModule,
    // AngularFireStorageModule
  ],
  providers: [
    ChatService,
    HttpClient, 

    AuthService,
    // AuthGuard,
    // AdminAuthGuard,
    // {    
    // provide: AuthHttp,
    //   useFactory: authHttpServiceFactory,
    //   deps: [ HttpClient ]
    // },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
