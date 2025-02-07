// import { Component } from '@angular/core';
// import { UserService } from '../user.service';
// import { LoanService } from '../loan.service';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-get-all-applications',
//   imports: [CommonModule],
//   templateUrl: './get-all-applications.component.html',
//   styleUrl: './get-all-applications.component.css',
// })
// export class GetAllApplicationsComponent {
//   loanApplications: any;

//   constructor(private service: LoanService) {}

//   ngOnInit(): void {
//     this.getAllNewLoanApplications();
//   }

//   getAllNewLoanApplications(): void {
//     this.service.fnRetriveAllApplications().subscribe((response) => {
//       this.loanApplications = response;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-get-all-applications',
  imports: [CommonModule, NgxPaginationModule],
  providers: [DatePipe],
  templateUrl: './get-all-applications.component.html',
  styleUrls: ['./get-all-applications.component.css'],
})
export class GetAllApplicationsComponent implements OnInit {
  loanApplications: any;
  page: number = 1;

  constructor(private service: LoanService, private router: Router) {}

  ngOnInit(): void {
    this.getAllNewLoanApplications();
  }

  getAllNewLoanApplications(): void {
    this.service.fnRetriveAllApplications().subscribe((response) => {
      this.loanApplications = response;
    });
  }

  processApplication(applicationId: number): void {
    this.router.navigate(['/process-loan', applicationId]);
  }
}
