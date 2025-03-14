import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegistryComponent} from './components/registry/registry.component';
import {LoginPhotoComponent} from './components/login-photo/login-photo.component';
import {StudentsComponent} from './components/students/students.component';
import {AssitsComponent} from './components/assits/assits.component';
import {GroupsComponent} from './components/groups/groups.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registry', component: RegistryComponent},
  {path: 'login-photo', component: LoginPhotoComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'assits', component: AssitsComponent},
  {path: 'groups', component: GroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
