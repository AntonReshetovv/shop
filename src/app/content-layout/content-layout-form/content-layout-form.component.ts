import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentLayoutService } from '../content-layout.service';

@Component({
  selector: 'app-content-layout-form',
  templateUrl: './content-layout-form.component.html',
  styleUrls: ['./content-layout-form.component.scss'],
})
export class ContentLayoutFormComponent implements OnInit {
  productForm = this.fb.group({
    title: ['', [Validators.required]],
    price: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private httpService: ContentLayoutService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.httpService.createProduct(this.productForm.value);
  }
}
