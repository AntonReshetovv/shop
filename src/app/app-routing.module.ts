import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'overview',
    component: ContentLayoutComponent,
    children: [
      { path: 'catalog', component: CatalogComponent },
      { path: 'create-product', component: ProductFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
