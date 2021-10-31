import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {CatalogComponent} from "./catalog/catalog.component";

const routes: Routes = [
  {path: '', redirectTo: '/api/login', pathMatch: 'full'},
  {path: 'api/login', component: LoginComponent},
  {path: 'api/registration', component: RegistrationComponent},
  {path: 'api/catalog', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
