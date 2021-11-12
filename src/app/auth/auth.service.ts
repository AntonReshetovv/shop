import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthPayload } from '../shared/interfaces/auth-payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  registration(authPayload: AuthPayload): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(authPayload.email, authPayload.password)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  login(authPayload: AuthPayload): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(authPayload.email, authPayload.password)
      .then((data) => {
        this.router.navigate(['overview']);
        return data;
      })
      .catch((err) => {
        console.log('error', err);
      });
  }
}
