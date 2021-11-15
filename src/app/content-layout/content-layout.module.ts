import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutFormComponent } from './content-layout-form/content-layout-form.component';
import { ContentLayoutCatalogComponent } from './content-layout-catalog/content-layout-catalog.component';
import { ContentLayoutComponent } from './content-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentLayoutComponent,
    ContentLayoutCatalogComponent,
    ContentLayoutFormComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class ContentLayoutModule {}
