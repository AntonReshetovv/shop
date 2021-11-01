import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductItem} from "../shared/interfaces/product-item";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

const PRODUCTS_DATA: ProductItem[] = [
  {id: 1, title: 'Test1', price: '1000'},
  {id: 2, title: 'Test2', price: '2000'},
  {id: 3, title: 'Test3', price: '3000'},
  {id: 4, title: 'Test4', price: '4000'},
  {id: 5, title: 'Test5', price: '5000'},
  {id: 6, title: 'Test6', price: '6000'},
  {id: 7, title: 'Test7', price: '7000'},
  {id: 8, title: 'Test8', price: '8000'},
  {id: 9, title: 'Test9', price: '9000'},
  {id: 10, title: 'Test10', price: '10000'},
  {id: 11, title: 'Test11', price: '11000'},
  {id: 12, title: 'Test12', price: '12000'},
  {id: 13, title: 'Test13', price: '13000'},
  {id: 14, title: 'Test14', price: '14000'},
  {id: 15, title: 'Test15', price: '15000'},


]

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'action'];
  dataSource = new MatTableDataSource(PRODUCTS_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
