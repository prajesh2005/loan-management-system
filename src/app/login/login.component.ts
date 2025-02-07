// import { Component, Inject, PLATFORM_ID } from '@angular/core';
// import { Router, RouterLink } from '@angular/router';
// import {
//   FormBuilder,
//   FormGroup,
//   FormsModule,
//   ReactiveFormsModule,
// } from '@angular/forms';
// import { UserService } from '../user.service';
// import { isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   imports: [RouterLink, FormsModule, ReactiveFormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   authRequest: any;
//   private isBrowser: boolean;

//   constructor(
//     private fb: FormBuilder,
//     private us: UserService,
//     private router: Router,
//     @Inject(PLATFORM_ID) private platformId: object
//   ) {
//     this.isBrowser = isPlatformBrowser(platformId);
//     this.authRequest = this.fb.group({
//       username: [],
//       password: [],
//     });
//   }

//   fnLogin() {
//     if (this.isBrowser) {
//       this.us.fnLogin(this.authRequest.value).subscribe(
//         (response) => {
//           var res = { token: '' };
//           res = <any>response;
//           if (res.token) {
//             localStorage.setItem('jwt', res.token);
//             this.router.navigateByUrl('');
//           }
//         },
//         (error) => {
//           alert('Login failed: Invalid credentials');
//         }
//       );
//     } else {
//       console.warn('localStorage is not available on the server.');
//     }
//   }
// }

import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; // Import ToastService

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularToastifyModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  // providers: [ToastService],
})
export class LoginComponent {
  authRequest: any;
  private isBrowser: boolean;
  hidePassword = true;
  errorMessage: string | null = null; // Add this property

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private router: Router,
    private toastService: ToastService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.authRequest = this.fb.group({
      username: [],
      password: [],
    });
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  fnLogin() {
    if (this.isBrowser) {
      this.us.fnLogin(this.authRequest.value).subscribe(
        (response) => {
          var res = { token: '', role: '' };
          res = <any>response;
          if (res.token) {
            localStorage.setItem('jwt', res.token);
            localStorage.setItem('role', res.role); // Ensure role is set
            if (res.role === 'BANKMANAGER') {
              this.toastService.success(
                'Login successful, Welcome Bank Manager'
              ); // Show success toast
            } else this.toastService.success('Login successful!'); // Show success toast
            setTimeout(() => {
              this.router.navigateByUrl('');
            }, 2000); // Delay navigation by 1 second
          }
        },
        (error) => {
          this.errorMessage = 'Login failed: Invalid credentials'; // Set the error message
          // this.toastService.error('Login failed: Invalid credentials'); // Show error toast
        }
      );
    } else {
      console.warn('localStorage is not available on the server.');
    }
  }
}
