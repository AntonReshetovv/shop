import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { ContentLayoutCatalogComponent } from './content-layout/content-layout-catalog/content-layout-catalog.component';
import { ContentLayoutFormComponent } from './content-layout/content-layout-form/content-layout-form.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'overview',
    component: ContentLayoutComponent,
    children: [
      { path: 'catalog', component: ContentLayoutCatalogComponent },
      { path: 'create-product', component: ContentLayoutFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
