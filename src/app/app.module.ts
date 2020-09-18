import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistryComponent } from './components/registry/registry.component';
import { LoginPhotoComponent } from './components/login-photo/login-photo.component';
import { StudentsComponent } from './components/students/students.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AssitsComponent } from './components/assits/assits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistryComponent,
    LoginPhotoComponent,
    StudentsComponent,
    GroupsComponent,
    AssitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
