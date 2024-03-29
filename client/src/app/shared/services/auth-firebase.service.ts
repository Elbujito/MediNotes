import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from "firebase/app";

import {AlertService} from './alert.service';

@Injectable()
export class AuthFirebaseService {
  public token: string;

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private alertService: AlertService) { }

  public onSuccess(): void {
    sessionStorage.setItem('session-alive', 'true');
    this.token = 'some-temporary-token';
    this.router.navigate(['/dashboard']);
  }

  public logout(): void {
    sessionStorage.removeItem('session-alive');
    this.token = null;
    this.router.navigate(['/']);
  }

  public getIdToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  public isAuthenticated(): string {
    return sessionStorage.getItem('session-alive');
  }

}
