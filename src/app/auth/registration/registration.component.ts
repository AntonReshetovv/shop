import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.fb.group({
    email: ['', [Validators.email]],
    password: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
