import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isRegister = true;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.isRegister ?
      this.authService.login(this.loginForm.value) :
      this.authService.registration(this.loginForm.value).then(() => {
        this.isRegister = true;
        this.loginForm.reset();
      });
  }

  onToggle() {
    this.isRegister = !this.isRegister;
  }
}
