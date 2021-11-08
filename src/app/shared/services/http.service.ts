import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
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
    // Написал return для того, что по хорошему backend должен возвращать
    // statusCode === 400, я пользуюсь fireBase,
    // по этому я просто делаю return чтобы в БД ничего не добавлять
    if(!product.price || !product.title){
      return
    }
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
