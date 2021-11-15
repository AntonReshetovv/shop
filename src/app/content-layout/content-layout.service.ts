import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { ProductItem } from './interfaces/product-item';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContentLayoutService {
  productsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.productsRef = db.list('product-list');
  }

  createProduct(product: ProductItem) {
    this.router.navigate(['overview/content-layout-catalog']);
    return this.productsRef.push({
      title: product.title,
      price: product.price,
    });
  }

  getAllProduct(): AngularFireList<any> {
    return this.productsRef;
  }

  deleteProduct(product: any): Promise<any> {
    return this.productsRef.remove(product.key);
  }
}
