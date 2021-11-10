import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {ProductItem} from "../interfaces/product-item";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  productsRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    public router: Router
  ) {
    this.productsRef = db.list('product-list');
  }

  createProduct(product: ProductItem) {
    this.router.navigate(['api/overview/catalog'])
    return this.productsRef.push({
      title: product.title,
      price: Number(product.price),
    })
  }

  getAllProduct(): AngularFireList<any> {
    return this.productsRef;
  }

  deleteProduct(product: any): Promise<any> {
    return this.productsRef.remove(product.key)
  }
}
