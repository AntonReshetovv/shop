import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { ProductItem } from '../shared/interfaces/product-item';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  products: ProductItem[] = [];

  displayedColumns: string[] = ['title', 'price', 'action'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
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
        this.products = data;
        this.dataSource = new MatTableDataSource(this.products);
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
