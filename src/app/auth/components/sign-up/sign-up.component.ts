import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpError: string = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  signUp(user: object) {
    this.authService
      .register(user)
      .subscribe((result: HttpErrorResponse | Object) => {
        if (result instanceof HttpErrorResponse) {
          this.signUpError = result.error.message;
        } else {
          this.authService.loginRightAfterRegister(user, () => {
            this.userService.setCurrentUserToProfile();
            this.router.navigate(['/main']);
          });
        }
      });
  }

  ngOnInit(): void {}
}
