import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"users",component:UserListComponent},
  {path:"resources",component:ResourceListComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
