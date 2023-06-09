import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/auth/signup';
  private _loginUrl = 'http://localhost:3000/auth/signin';

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  login(user: object) {
    return this.http.post(this._loginUrl, user).pipe(
      map((res) => {
        if (res && res.hasOwnProperty('token')) {
          const map = new Map(Object.entries(res));
          localStorage.setItem('token', map.get('token'));
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  loginRightAfterRegister(user: object, callback: Function) {
    const map = new Map(Object.entries(user));
    const signedUser = {
      login: map.get('login'),
      password: map.get('password'),
    };

    this.http.post(this._loginUrl, signedUser).subscribe((res) => {
      if (res && res.hasOwnProperty('token')) {
        const map = new Map(Object.entries(res));
        localStorage.setItem('token', map.get('token'));
        callback();
      }
    });
  }

  register(user: object) {
    return this.http.post(this._registerUrl, user).pipe(
      map((res) => {
          return res;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token!);
  }

  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
