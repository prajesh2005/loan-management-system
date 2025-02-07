// // // // // // import { Component, inject } from '@angular/core';
// // // // // // import {
// // // // // //   FormBuilder,
// // // // // //   FormGroup,
// // // // // //   ReactiveFormsModule,
// // // // // //   Validators,
// // // // // // } from '@angular/forms';
// // // // // // import { Router, RouterLink } from '@angular/router';
// // // // // // import { UserService } from '../user.service';
// // // // // // import { response } from 'express';
// // // // // // import { log } from 'console';

// // // // // // @Component({
// // // // // //   selector: 'app-signup',
// // // // // //   imports: [ReactiveFormsModule, RouterLink],
// // // // // //   templateUrl: './signup.component.html',
// // // // // //   styleUrl: './signup.component.css',
// // // // // // })
// // // // // // export class SignupComponent {
// // // // // //   registerForm: FormGroup;
// // // // // //   submitted = false;

// // // // // //   constructor(private formBuilder: FormBuilder, private us: UserService) {
// // // // // //     this.registerForm = this.formBuilder.group(
// // // // // //       {
// // // // // //         username: ['', Validators.required],
// // // // // //         password: ['', [Validators.required, Validators.minLength(6)]],
// // // // // //         confirmPassword: ['', Validators.required],
// // // // // //       },
// // // // // //       {
// // // // // //         validator: this.mustMatch('password', 'confirmPassword'),
// // // // // //       }
// // // // // //     );
// // // // // //   }

// // // // // //   mustMatch(password: string, confirmPassword: string) {
// // // // // //     return (formGroup: FormGroup) => {
// // // // // //       const control = formGroup.controls[password];
// // // // // //       const matchingControl = formGroup.controls[confirmPassword];

// // // // // //       if (control.value !== matchingControl.value) {
// // // // // //         matchingControl.setErrors({ mustMatch: true });
// // // // // //       } else {
// // // // // //         matchingControl.setErrors(null);
// // // // // //       }
// // // // // //     };
// // // // // //   }

// // // // // //   onSubmit() {
// // // // // //     this.us.fnSignup(this.registerForm.value).subscribe((response) => {
// // // // // //       console.log(response);
// // // // // //     });
// // // // // //     console.log('Form Submitted', this.registerForm.value);
// // // // // //   }

// // // // // //   // get f() {
// // // // // //   //   return this.registerForm.controls;
// // // // // //   // }
// // // // // // }

// // // // // import { Component } from '@angular/core';
// // // // // import {
// // // // //   FormBuilder,
// // // // //   FormGroup,
// // // // //   ReactiveFormsModule,
// // // // //   Validators,
// // // // // } from '@angular/forms';
// // // // // import { Router, RouterLink } from '@angular/router';
// // // // // import { UserService } from '../user.service';
// // // // // import { CommonModule } from '@angular/common';

// // // // // @Component({
// // // // //   selector: 'app-signup',
// // // // //   imports: [ReactiveFormsModule, RouterLink, CommonModule],
// // // // //   templateUrl: './signup.component.html',
// // // // //   styleUrls: ['./signup.component.css'],
// // // // // })
// // // // // export class SignupComponent {
// // // // //   registerForm: FormGroup;
// // // // //   submitted = false;
// // // // //   userExistsMessage = '';

// // // // //   constructor(
// // // // //     private formBuilder: FormBuilder,
// // // // //     private us: UserService,
// // // // //     private router: Router
// // // // //   ) {
// // // // //     this.registerForm = this.formBuilder.group(
// // // // //       {
// // // // //         username: ['', Validators.required],
// // // // //         password: ['', [Validators.required, Validators.minLength(6)]],
// // // // //         confirmPassword: ['', Validators.required],
// // // // //       },
// // // // //       {
// // // // //         validator: this.mustMatch('password', 'confirmPassword'),
// // // // //       }
// // // // //     );
// // // // //   }

// // // // //   mustMatch(password: string, confirmPassword: string) {
// // // // //     return (formGroup: FormGroup) => {
// // // // //       const control = formGroup.controls[password];
// // // // //       const matchingControl = formGroup.controls[confirmPassword];

// // // // //       if (control.value !== matchingControl.value) {
// // // // //         matchingControl.setErrors({ mustMatch: true });
// // // // //       } else {
// // // // //         matchingControl.setErrors(null);
// // // // //       }
// // // // //     };
// // // // //   }

// // // // //   onSubmit() {
// // // // //     this.submitted = true;

// // // // //     if (this.registerForm.invalid) {
// // // // //       return;
// // // // //     }

// // // // //     const formData = {
// // // // //       ...this.registerForm.value,
// // // // //       roles: 'CUSTOMER',
// // // // //     };

// // // // //     this.us.fnSignup(formData).subscribe(
// // // // //       (response) => {
// // // // //         console.log(response);
// // // // //         localStorage.setItem('role', 'CUSTOMER'); // Store the role
// // // // //         this.router.navigateByUrl('login');
// // // // //       },
// // // // //       (error) => {
// // // // //         if (error.status === 409) {
// // // // //           // Assuming 409 Conflict for UserAlreadyExistsException
// // // // //           this.userExistsMessage = 'User already exists';
// // // // //         } else {
// // // // //           console.error('Signup failed', error);
// // // // //         }
// // // // //       }
// // // // //     );
// // // // //   }
// // // // // }

// // // // import { Component } from '@angular/core';
// // // // import {
// // // //   FormBuilder,
// // // //   FormGroup,
// // // //   ReactiveFormsModule,
// // // //   Validators,
// // // // } from '@angular/forms';
// // // // import { Router, RouterLink } from '@angular/router';
// // // // import { UserService } from '../user.service';
// // // // import { CommonModule } from '@angular/common';

// // // // @Component({
// // // //   selector: 'app-signup',
// // // //   imports: [ReactiveFormsModule, RouterLink, CommonModule],
// // // //   templateUrl: './signup.component.html',
// // // //   styleUrls: ['./signup.component.css'],
// // // // })
// // // // export class SignupComponent {
// // // //   registerForm: FormGroup;
// // // //   submitted = false;
// // // //   userExistsMessage = '';

// // // //   constructor(
// // // //     private formBuilder: FormBuilder,
// // // //     private us: UserService,
// // // //     private router: Router
// // // //   ) {
// // // //     this.registerForm = this.formBuilder.group(
// // // //       {
// // // //         username: ['', Validators.required],
// // // //         password: ['', [Validators.required, Validators.minLength(6)]],
// // // //         confirmPassword: ['', Validators.required],
// // // //       },
// // // //       {
// // // //         validator: this.mustMatch('password', 'confirmPassword'),
// // // //       }
// // // //     );
// // // //   }

// // // //   mustMatch(password: string, confirmPassword: string) {
// // // //     return (formGroup: FormGroup) => {
// // // //       const control = formGroup.controls[password];
// // // //       const matchingControl = formGroup.controls[confirmPassword];

// // // //       if (control.value !== matchingControl.value) {
// // // //         matchingControl.setErrors({ mustMatch: true });
// // // //       } else {
// // // //         matchingControl.setErrors(null);
// // // //       }
// // // //     };
// // // //   }

// // // //   onSubmit() {
// // // //     this.submitted = true;

// // // //     if (this.registerForm.invalid) {
// // // //       return;
// // // //     }

// // // //     const formData = {
// // // //       ...this.registerForm.value,
// // // //       roles: 'CUSTOMER',
// // // //     };

// // // //     this.us.fnSignup(formData).subscribe(
// // // //       (response) => {
// // // //         console.log(response);
// // // //         localStorage.setItem('role', 'CUSTOMER'); // Store the role
// // // //         this.router.navigateByUrl('login');
// // // //       },
// // // //       (error) => {
// // // //         if (error.status === 409) {
// // // //           // Assuming 409 Conflict for UserAlreadyExistsException
// // // //           this.userExistsMessage = 'User already exists';
// // // //         } else {
// // // //           console.error('Signup failed', error);
// // // //         }
// // // //       }
// // // //     );
// // // //   }
// // // // }

// // // import { Component } from '@angular/core';
// // // import {
// // //   FormBuilder,
// // //   FormGroup,
// // //   ReactiveFormsModule,
// // //   Validators,
// // // } from '@angular/forms';
// // // import { Router, RouterLink } from '@angular/router';
// // // import { UserService } from '../user.service';
// // // import { CommonModule } from '@angular/common';

// // // @Component({
// // //   selector: 'app-signup',
// // //   imports: [ReactiveFormsModule, RouterLink, CommonModule],
// // //   templateUrl: './signup.component.html',
// // //   styleUrls: ['./signup.component.css'],
// // // })
// // // export class SignupComponent {
// // //   registerForm: FormGroup;
// // //   submitted = false;
// // //   userExistsMessage = '';

// // //   constructor(
// // //     private formBuilder: FormBuilder,
// // //     private us: UserService,
// // //     private router: Router
// // //   ) {
// // //     this.registerForm = this.formBuilder.group(
// // //       {
// // //         username: ['', Validators.required],
// // //         password: ['', [Validators.required, Validators.minLength(6)]], // Minimum length validator
// // //         confirmPassword: ['', Validators.required],
// // //       },
// // //       {
// // //         validator: this.mustMatch('password', 'confirmPassword'),
// // //       }
// // //     );
// // //   }

// // //   mustMatch(password: string, confirmPassword: string) {
// // //     return (formGroup: FormGroup) => {
// // //       const control = formGroup.controls[password];
// // //       const matchingControl = formGroup.controls[confirmPassword];

// // //       if (control.value !== matchingControl.value) {
// // //         matchingControl.setErrors({ mustMatch: true });
// // //       } else {
// // //         matchingControl.setErrors(null);
// // //       }
// // //     };
// // //   }

// // //   onSubmit() {
// // //     this.submitted = true;

// // //     if (this.registerForm.invalid) {
// // //       return;
// // //     }

// // //     const formData = {
// // //       ...this.registerForm.value,
// // //       roles: 'CUSTOMER',
// // //     };

// // //     this.us.fnSignup(formData).subscribe(
// // //       (response) => {
// // //         console.log(response);
// // //         localStorage.setItem('role', 'CUSTOMER'); // Store the role
// // //         this.router.navigateByUrl('login');
// // //       },
// // //       (error) => {
// // //         if (error.status === 409) {
// // //           // Assuming 409 Conflict for UserAlreadyExistsException
// // //           this.userExistsMessage = 'User already exists';
// // //         } else {
// // //           console.error('Signup failed', error);
// // //         }
// // //       }
// // //     );
// // //   }
// // // }

// // import { Component } from '@angular/core';
// // import {
// //   FormBuilder,
// //   FormGroup,
// //   ReactiveFormsModule,
// //   Validators,
// // } from '@angular/forms';
// // import { Router, RouterLink } from '@angular/router';
// // import { UserService } from '../user.service';
// // import { CommonModule } from '@angular/common';

// // @Component({
// //   selector: 'app-signup',
// //   imports: [ReactiveFormsModule, RouterLink, CommonModule],
// //   templateUrl: './signup.component.html',
// //   styleUrls: ['./signup.component.css'],
// // })
// // export class SignupComponent {
// //   registerForm: FormGroup;
// //   submitted = false;
// //   userExistsMessage = '';

// //   constructor(
// //     private formBuilder: FormBuilder,
// //     private us: UserService,
// //     private router: Router
// //   ) {
// //     this.registerForm = this.formBuilder.group(
// //       {
// //         username: ['', Validators.required],
// //         password: ['', [Validators.required, Validators.minLength(6)]], // Minimum length validator
// //         confirmPassword: ['', Validators.required],
// //       },
// //       {
// //         validator: this.mustMatch('password', 'confirmPassword'),
// //       }
// //     );
// //   }

// //   mustMatch(password: string, confirmPassword: string) {
// //     return (formGroup: FormGroup) => {
// //       const control = formGroup.controls[password];
// //       const matchingControl = formGroup.controls[confirmPassword];

// //       if (control.value !== matchingControl.value) {
// //         matchingControl.setErrors({ mustMatch: true });
// //         formGroup.setErrors({ mustMatch: true });
// //       } else {
// //         matchingControl.setErrors(null);
// //         formGroup.setErrors(null);
// //       }
// //     };
// //   }

// //   onSubmit() {
// //     this.submitted = true;

// //     if (this.registerForm.invalid) {
// //       return;
// //     }

// //     const formData = {
// //       ...this.registerForm.value,
// //       roles: 'CUSTOMER',
// //     };

// //     this.us.fnSignup(formData).subscribe(
// //       (response) => {
// //         console.log(response);
// //         localStorage.setItem('role', 'CUSTOMER'); // Store the role
// //         this.router.navigateByUrl('login');
// //       },
// //       (error) => {
// //         if (error.status === 409) {
// //           // Assuming 409 Conflict for UserAlreadyExistsException
// //           this.userExistsMessage = 'User already exists';
// //         } else {
// //           console.error('Signup failed', error);
// //         }
// //       }
// //     );
// //   }
// // }

// import { Component } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { UserService } from '../user.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-signup',
//   imports: [ReactiveFormsModule, RouterLink, CommonModule],
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
// })
// export class SignupComponent {
//   registerForm: FormGroup;
//   submitted = false;
//   userExistsMessage = '';

//   constructor(
//     private formBuilder: FormBuilder,
//     private us: UserService,
//     private router: Router
//   ) {
//     this.registerForm = this.formBuilder.group(
//       {
//         username: ['', Validators.required],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', Validators.required],
//       },
//       {
//         validator: this.mustMatch('password', 'confirmPassword'),
//       }
//     );
//   }

//   mustMatch(password: string, confirmPassword: string) {
//     return (formGroup: FormGroup) => {
//       const control = formGroup.controls[password];
//       const matchingControl = formGroup.controls[confirmPassword];

//       if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ mustMatch: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//     };
//   }

//   onSubmit() {
//     this.submitted = true;

//     if (this.registerForm.invalid) {
//       return;
//     }

//     const formData = {
//       ...this.registerForm.value,
//       roles: 'CUSTOMER',
//     };

//     this.us.fnSignup(formData).subscribe(
//       (response) => {
//         console.log(response);
//         localStorage.setItem('role', 'CUSTOMER');
//         this.router.navigateByUrl('login');
//       },
//       (error) => {
//         if (error.status === 409) {
//           this.userExistsMessage = 'User already exists';
//         } else {
//           console.error('Signup failed', error);
//         }
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm: FormGroup;
  submitted = false;
  userExistsMessage = '';
  hidePassword = true; // Variable to toggle password visibility
  hideConfirmPassword = true; // Variable to toggle password visibility

  constructor(
    private formBuilder: FormBuilder,
    private us: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]], // Minimum length validator
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const formData = {
      ...this.registerForm.value,
      roles: 'CUSTOMER',
    };

    this.us.fnSignup(formData).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('role', 'CUSTOMER'); // Store the role
        this.router.navigateByUrl('login');
      },
      (error) => {
        if (error.status === 409) {
          // Assuming 409 Conflict for UserAlreadyExistsException
          this.userExistsMessage = 'User already exists';
        } else {
          console.error('Signup failed', error);
        }
      }
    );
  }
}
