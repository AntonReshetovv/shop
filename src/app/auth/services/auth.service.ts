import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AuthPayload} from "../shared/interfaces/auth-payload";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
  ) {
  }

  registration(authPayload: AuthPayload) {
    return this.afAuth.createUserWithEmailAndPassword(authPayload.email, authPayload.password)
      .then(data => {
        console.log('registration', data)
        this.router.navigate(['api/login'])
        return data
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  login(authPayload: AuthPayload) {
    return this.afAuth.signInWithEmailAndPassword(authPayload.email, authPayload.password)
      .then(data => {
        console.log('loginData', data)
        this.router.navigate(['api/catalog'])
        return data
      })
      .catch((err) => {
        console.log('error', err)
      })
  }
}
