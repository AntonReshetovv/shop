import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm = this.fb.group({
    title: ['', [Validators.required]],
    price: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private httpService: HttpService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.httpService.createProduct(this.productForm.value);
  }
}
