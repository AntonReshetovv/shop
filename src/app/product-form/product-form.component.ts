import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpService} from "../shared/services/http.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm = this.fb.group({
    title: [''],
    price: []
  })

  constructor(private fb: FormBuilder, private httpService: HttpService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.openSnackBar('Продукт добавлен', 'ЗАКРЫТЬ')
    this.httpService.createProduct(this.productForm.value)
    this.productForm.reset()
  }

  openSnackBar(message: string, action: string) {
    if (this.productForm.value.title.length > 0 && this.productForm.value.price !== null) {
      this._snackBar.open(message, action)
    } else {
      return
    }
  }

}
