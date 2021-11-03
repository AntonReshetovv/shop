import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import {ProductItem} from "../interfaces/product-item";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  productsRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.productsRef = db.list('product-list');
  }

  createProduct(product: ProductItem) {
    console.log('product', product)
    return this.productsRef.push({
      title: product.title,
      price: product.price,
    })
  }

  getAllProduct(): AngularFireList<any> {
    return this.productsRef;
  }

  deleteProduct(product: any): Promise<any> {
    return this.productsRef.remove(product.key)
  }
}
