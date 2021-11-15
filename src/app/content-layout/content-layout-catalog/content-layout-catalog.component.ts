import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { ProductItem } from '../interfaces/product-item';
import { ContentLayoutService } from '../content-layout.service';

@Component({
  selector: 'app-content-layout-catalog',
  templateUrl: './content-layout-catalog.component.html',
  styleUrls: ['./content-layout-catalog.component.scss'],
})
export class ContentLayoutCatalogComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'action'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpService: ContentLayoutService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([]);
    this.getAll();
  }

  getAll() {
    this.httpService
      .getAllProduct()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((data) => ({
            key: data.payload.key,
            ...data.payload.val(),
          }))
        )
      )
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeProduct(product: ProductItem) {
    this.httpService
      .deleteProduct(product)
      .then(() => console.log('Продукт удален'))
      .catch((err) => console.log('Возникла ошибка', err));
  }
}
