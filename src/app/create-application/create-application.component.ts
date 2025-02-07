// // // // // import { Component } from '@angular/core';
// // // // // import { LoanService } from '../loan.service';
// // // // // import { CommonModule } from '@angular/common';
// // // // // import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // // // // @Component({
// // // // //   selector: 'app-create-application',
// // // // //   imports: [CommonModule, ReactiveFormsModule, FormsModule],
// // // // //   templateUrl: './create-application.component.html',
// // // // //   styleUrl: './create-application.component.css',
// // // // // })
// // // // // export class CreateApplicationComponent {
// // // // //   newLoanApplicationResponse: any;

// // // // //   constructor(private service: LoanService) {}

// // // // //   createLoanApplication(data: any): void {
// // // // //     this.service.fnAddApplication(data).subscribe((response) => {
// // // // //       this.newLoanApplicationResponse = response;
// // // // //     });
// // // // //   }
// // // // // }

// // // // import { Component, OnInit } from '@angular/core';
// // // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // // import { LoanService } from '../loan.service';
// // // // import { CommonModule } from '@angular/common';
// // // // import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // // // @Component({
// // // //   selector: 'app-create-application',
// // // //   imports: [CommonModule, ReactiveFormsModule, FormsModule],
// // // //   templateUrl: './create-application.component.html',
// // // //   styleUrls: ['./create-application.component.css'],

// // // // })
// // // // export class CreateApplicationComponent implements OnInit {
// // // //   newLoanApplicationForm!: FormGroup; // Use the non-null assertion operator
// // // //   newLoanApplicationResponse: any;

// // // //   constructor(private formBuilder: FormBuilder, private service: LoanService) {}

// // // //   ngOnInit() {
// // // //     this.newLoanApplicationForm = this.formBuilder.group({
// // // //       applicantName: ['', Validators.required],
// // // //       applicantAddress: ['', Validators.required],
// // // //       applicantProfession: ['', Validators.required],
// // // //       applicantEmail: ['', [Validators.required, Validators.email]],
// // // //       applicantPhone: [
// // // //         '',
// // // //         [Validators.required, Validators.pattern('^[0-9]{10}$')],
// // // //       ],
// // // //       applicantPAN: ['', Validators.required],
// // // //       monthlyIncome: [0, Validators.required],
// // // //       applicationDate: ['', Validators.required],
// // // //       loanPlanId: ['', Validators.required],
// // // //       noOfDependents: [0, Validators.required],
// // // //     });
// // // //   }

// // // //   createLoanApplication() {
// // // //     if (this.newLoanApplicationForm.valid) {
// // // //       this.service
// // // //         .fnAddApplication(this.newLoanApplicationForm.value)
// // // //         .subscribe((response) => {
// // // //           this.newLoanApplicationResponse = response;
// // // //         });
// // // //     }
// // // //   }
// // // // }

// // // import { Component, OnInit } from '@angular/core';
// // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { LoanService } from '../loan.service';
// // // import { CommonModule } from '@angular/common';
// // // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // // import { DatePipe } from '@angular/common';

// // // @Component({
// // //   selector: 'app-create-application',
// // //   imports: [CommonModule, ReactiveFormsModule, FormsModule],
// // //   templateUrl: './create-application.component.html',
// // //   styleUrls: ['./create-application.component.css'],
// // //   providers: [DatePipe],
// // // })
// // // export class CreateApplicationComponent implements OnInit {
// // //   newLoanApplicationForm!: FormGroup; // Use the non-null assertion operator
// // //   newLoanApplicationResponse: any;
// // //   minDate: string;
// // //   selectedFile: File | null = null;

// // //   constructor(
// // //     private formBuilder: FormBuilder,
// // //     private service: LoanService,
// // //     private datePipe: DatePipe
// // //   ) {
// // //     const today = new Date();
// // //     this.minDate = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
// // //   }

// // //   ngOnInit() {
// // //     // this.newLoanApplicationForm = this.formBuilder.group({
// // //     //   applicantName: ['', Validators.required],
// // //     //   applicantAddress: ['', Validators.required],
// // //     //   applicantProfession: ['', Validators.required],
// // //     //   applicantEmail: ['', [Validators.required, Validators.email]],
// // //     //   applicantPhone: [
// // //     //     '',
// // //     //     [Validators.required, Validators.pattern('^[0-9]{10}$')],
// // //     //   ],
// // //     //   applicantPAN: ['', Validators.required],
// // //     //   monthlyIncome: [0, Validators.required],
// // //     //   applicationDate: [this.minDate, Validators.required],
// // //     //   loanPlanId: ['', Validators.required],
// // //     //   noOfDependents: [0, Validators.required],
// // //     // });
// // //     this.newLoanApplicationForm = this.formBuilder.group({
// // //       applicantName: [
// // //         '',
// // //         [
// // //           Validators.required,
// // //           Validators.pattern('^[a-zA-Z\\s]+$'),
// // //           Validators.minLength(10),
// // //         ],
// // //       ],
// // //       applicantAddress: ['', Validators.required],
// // //       applicantProfession: ['', Validators.required],
// // //       applicantEmail: ['', [Validators.required, Validators.email]],
// // //       applicantPhone: [
// // //         '',
// // //         [
// // //           Validators.required,
// // //           Validators.pattern('^[0-9]{10}$'),
// // //           Validators.pattern('^[0-9]{10}$'),
// // //         ],
// // //       ],
// // //       applicantPAN: [
// // //         '',
// // //         [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')],
// // //       ],
// // //       monthlyIncome: [0, Validators.required],
// // //       applicationDate: [this.minDate, Validators.required],
// // //       loanPlanId: ['', Validators.required],
// // //       noOfDependents: [0, [Validators.required, Validators.min(0)]],
// // //       supportingDocuments: [null, Validators.required],
// // //     });
// // //   }
// // //   onFileChange(event: any) {
// // //     this.selectedFile = event.target.files[0];
// // //   }

// // //   createLoanApplication() {
// // //     if (this.newLoanApplicationForm.valid) {
// // //       const formData = new FormData();
// // //       formData.append(
// // //         'loanApplicationDTO',
// // //         JSON.stringify(this.newLoanApplicationForm.value)
// // //       );
// // //       if (this.selectedFile) {
// // //         formData.append('supportingDocuments', this.selectedFile);
// // //       }

// // //       this.service.fnAddApplication(formData).subscribe((response) => {
// // //         this.newLoanApplicationResponse = response;
// // //         alert('Application submitted');
// // //       });
// // //     }
// // //   }
// // // }

// // import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { LoanService } from '../loan.service';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // import { DatePipe } from '@angular/common';

// // @Component({
// //   selector: 'app-create-application',
// //   imports: [CommonModule, ReactiveFormsModule, FormsModule],
// //   templateUrl: './create-application.component.html',
// //   styleUrls: ['./create-application.component.css'],
// //   providers: [DatePipe],
// // })
// // export class CreateApplicationComponent implements OnInit {
// //   newLoanApplicationForm!: FormGroup; // Use the non-null assertion operator
// //   newLoanApplicationResponse: any;
// //   minDate: string;
// //   selectedFile: File | null = null;

// //   constructor(
// //     private formBuilder: FormBuilder,
// //     private service: LoanService,
// //     private datePipe: DatePipe
// //   ) {
// //     const today = new Date();
// //     this.minDate = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
// //   }

// //   ngOnInit() {
// //     this.newLoanApplicationForm = this.formBuilder.group({
// //       applicantName: [
// //         '',
// //         [
// //           Validators.required,
// //           Validators.pattern('^[a-zA-Z\\s]+$'),
// //           Validators.minLength(10),
// //         ],
// //       ],
// //       applicantAddress: ['', Validators.required],
// //       applicantProfession: ['', Validators.required],
// //       applicantEmail: ['', [Validators.required, Validators.email]],
// //       applicantPhone: [
// //         '',
// //         [Validators.required, Validators.pattern('^[0-9]{10}$')],
// //       ],
// //       applicantPAN: [
// //         '',
// //         [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')],
// //       ],
// //       monthlyIncome: [0, Validators.required],
// //       applicationDate: [this.minDate, Validators.required],
// //       loanPlanId: ['', Validators.required],
// //       noOfDependents: [0, [Validators.required, Validators.min(0)]],
// //       supportingDocuments: [null, Validators.required],
// //     });
// //   }

// //   onFileChange(event: any) {
// //     this.selectedFile = event.target.files[0];
// //   }

// //   createLoanApplication() {
// //     if (this.newLoanApplicationForm.valid) {
// //       const formData = new FormData();
// //       formData.append(
// //         'loanApplicationDTO',
// //         JSON.stringify(this.newLoanApplicationForm.value)
// //       );
// //       if (this.selectedFile) {
// //         formData.append('supportingDocuments', this.selectedFile);
// //       }

// //       this.service.fnAddApplication(formData).subscribe((response) => {
// //         this.newLoanApplicationResponse = response;
// //         alert('Application submitted');
// //       });
// //     }
// //   }
// // }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoanService } from '../loan.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DatePipe } from '@angular/common';

// @Component({
//   selector: 'app-create-application',
//   imports: [CommonModule, ReactiveFormsModule, FormsModule],
//   templateUrl: './create-application.component.html',
//   styleUrls: ['./create-application.component.css'],
//   providers: [DatePipe],
// })
// export class CreateApplicationComponent implements OnInit {
//   newLoanApplicationForm!: FormGroup; // Use the non-null assertion operator
//   newLoanApplicationResponse: any;
//   minDate: string;
//   selectedFile: File | null = null;

//   constructor(
//     private formBuilder: FormBuilder,
//     private service: LoanService,
//     private datePipe: DatePipe
//   ) {
//     const today = new Date();
//     this.minDate = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
//   }

//   ngOnInit() {
//     this.newLoanApplicationForm = this.formBuilder.group({
//       applicantName: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern('^[a-zA-Z\\s]+$'),
//           Validators.minLength(10),
//         ],
//       ],
//       applicantAddress: ['', Validators.required],
//       applicantProfession: ['', Validators.required],
//       applicantEmail: ['', [Validators.required, Validators.email]],
//       applicantPhone: [
//         '',
//         [Validators.required, Validators.pattern('^[0-9]{10}$')],
//       ],
//       applicantPAN: [
//         '',
//         [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')],
//       ],
//       monthlyIncome: [0, Validators.required],
//       applicationDate: [this.minDate, Validators.required],
//       loanPlanId: ['', Validators.required],
//       noOfDependents: [0, [Validators.required, Validators.min(0)]],
//       supportingDocuments: [null, Validators.required],
//     });
//   }

//   onFileChange(event: any) {
//     const file = event.target.files[0];
//     this.selectedFile = file;
//     this.newLoanApplicationForm.patchValue({
//       supportingDocuments: file,
//     });
//     this.newLoanApplicationForm
//       .get('supportingDocuments')
//       ?.updateValueAndValidity();
//   }

//   createLoanApplication() {
//     if (this.newLoanApplicationForm.valid) {
//       const formData = new FormData();
//       const loanApplicationData = { ...this.newLoanApplicationForm.value };
//       delete loanApplicationData.supportingDocuments; // Remove the supportingDocuments field

//       formData.append(
//         'loanApplicationDTO',
//         JSON.stringify(loanApplicationData)
//       );
//       if (this.selectedFile) {
//         formData.append('supportingDocuments', this.selectedFile);
//       }

//       this.service.fnAddApplication(formData).subscribe(
//         (response) => {
//           this.newLoanApplicationResponse = response;
//           alert('Application submitted');
//         },
//         // (error) => {
//         //   this.newLoanApplicationResponse = {
//         //     success: false,
//         //     message:
//         //       error.error.message ||
//         //       'An error occurred while submitting the application.',
//         //   };
//         // }
//         (error) => {
//           const errorMessage =
//             error.error.message ||
//             'An error occurred while submitting the application.';
//           this.newLoanApplicationResponse = {
//             success: false,
//             message: errorMessage,
//           };
//         }
//       );
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../services/loan.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; // Import ToastService

@Component({
  selector: 'app-create-application',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularToastifyModule,
    AngularToastifyModule,
  ],
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css'],
  providers: [DatePipe],
})
export class CreateApplicationComponent implements OnInit {
  newLoanApplicationForm!: FormGroup; // Use the non-null assertion operator
  newLoanApplicationResponse: any;
  minDate: string;
  maxDate: string;
  selectedFile: File | null = null;
  showCustomProfessionField = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoanService,
    private datePipe: DatePipe,
    private toastService: ToastService
  ) {
    const today = new Date();
    this.minDate = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
    // this.maxDate = this.datePipe.transform(new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()), 'yyyy-MM-dd') || '';
    // this.maxDate = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
    this.maxDate = this.minDate;
  }

  ngOnInit() {
    this.newLoanApplicationForm = this.formBuilder.group({
      applicantName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z\\s]+$'),
          Validators.minLength(10),
        ],
      ],
      applicantAddress: ['', Validators.required],
      applicantProfession: ['', Validators.required],
      customProfession: [''],
      applicantEmail: ['', [Validators.required, Validators.email]],
      applicantPhone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      applicantPAN: [
        '',
        [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')],
      ],
      monthlyIncome: [0, Validators.required],
      applicationDate: [this.minDate, Validators.required],
      loanPlanId: ['', Validators.required],
      noOfDependents: [0, [Validators.required, Validators.min(0)]],
      supportingDocuments: [null, Validators.required],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.newLoanApplicationForm.patchValue({
      supportingDocuments: file,
    });
    this.newLoanApplicationForm
      .get('supportingDocuments')
      ?.updateValueAndValidity();
  }

  onProfessionChange(event: any) {
    const selectedProfession = event.target.value;
    this.showCustomProfessionField = selectedProfession === 'Other';
    if (this.showCustomProfessionField) {
      this.newLoanApplicationForm.controls['customProfession'].setValidators([
        Validators.required,
      ]);
    } else {
      this.newLoanApplicationForm.controls[
        'customProfession'
      ].clearValidators();
    }
    this.newLoanApplicationForm.controls[
      'customProfession'
    ].updateValueAndValidity();
  }

  createLoanApplication() {
    if (this.newLoanApplicationForm.valid) {
      const formData = new FormData();
      const loanApplicationData = { ...this.newLoanApplicationForm.value };

      // Check if the profession is "Other" and use the custom profession value
      if (loanApplicationData.applicantProfession === 'Other') {
        loanApplicationData.applicantProfession =
          loanApplicationData.customProfession;
      }

      // Remove the customProfession and supportingDocuments fields
      delete loanApplicationData.customProfession;
      delete loanApplicationData.supportingDocuments;

      formData.append(
        'loanApplicationDTO',
        JSON.stringify(loanApplicationData)
      );
      if (this.selectedFile) {
        formData.append('supportingDocuments', this.selectedFile);
      }

      this.service.fnAddApplication(formData).subscribe(
        (response) => {
          this.newLoanApplicationResponse = {
            success: true,
            message: response,
          };
          // alert('Application submitted successfully');
          this.toastService.info('Application submitted successfully');
          this.newLoanApplicationForm.reset();
          this.selectedFile = null;
          const fileInput = document.getElementById(
            'supportingDocuments'
          ) as HTMLInputElement;
          if (fileInput) {
            fileInput.value = '';
          }
          setTimeout(() => {
            this.newLoanApplicationResponse = null;
          }, 2000);
        },
        (error) => {
          console.error('Error response:', error);
          const errorMessage =
            error.error ||
            'An error occurred while submitting the application.';
          this.newLoanApplicationResponse = {
            success: false,
            message: errorMessage,
          };
        }
      );
    }
  }
}
