// // import { HttpClient } from '@angular/common/http';
// // import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// // import { isPlatformBrowser } from '@angular/common';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class LoanService {
// //   loan = 'http://localhost:5001/api/loanapplications'; // base URL of our API
// //   document = 'http://localhost:5001/api/documenttypes'; // base URL of our API
// //   private isBrowser: boolean;

// //   constructor(
// //     private http: HttpClient,
// //     @Inject(PLATFORM_ID) private platformId: object
// //   ) {
// //     this.isBrowser = isPlatformBrowser(platformId);
// //   }

// //   fnReadToken() {
// //     if (this.isBrowser) {
// //       var jwt = localStorage.getItem('jwt');
// //       if (jwt != null && jwt != '') {
// //         return jwt;
// //       }
// //     } else {
// //       console.warn('localStorage is not available on the server.');
// //     }
// //     return 'error';
// //   }

// //   fnAddApplication(food: any) {
// //     var token = this.fnReadToken();
// //     return this.http.post(this.loan, food, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //   }

// //   fnRetriveAllApplications() {
// //     var token = this.fnReadToken();
// //     return this.http.get(this.loan, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //   }

// //   fnFindApplicationById(id: number) {
// //     var token = this.fnReadToken();
// //     return this.http.get(this.loan + '/' + id, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //   }

// //   // fnUpdateApplication(food: any) {
// //   //   var token = this.fnReadToken();
// //   //   return this.http.put(this.loan, food, {
// //   //     headers: { Authorization: `Bearer ${token}` },
// //   //   });
// //   // }
// //   fnUpdateApplication(application: any) {
// //     var token = this.fnReadToken();
// //     console.log('Token:', token); // Add logging to check the token
// //     return this.http.put(
// //       `${this.loan}/${application.applicationId}`,
// //       application,
// //       {
// //         headers: { Authorization: `Bearer ${token}` },
// //       }
// //     );
// //   }

// //   fnRetriveDocumentTypes() {
// //     var token = this.fnReadToken();
// //     return this.http.get(this.document, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //   }
// // }

// import { HttpClient } from '@angular/common/http';
// import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoanService {
//   loan = 'http://localhost:5001/api/loanapplications'; // base URL of our API
//   loanPlan = 'http://localhost:5001/api/loanplans'; // base URL of our API
//   document = 'http://localhost:5001/api/documenttypes'; // base URL of our API
//   private isBrowser: boolean;

//   constructor(
//     private http: HttpClient,
//     @Inject(PLATFORM_ID) private platformId: object
//   ) {
//     this.isBrowser = isPlatformBrowser(platformId);
//   }

//   fnReadToken() {
//     if (this.isBrowser) {
//       var jwt = localStorage.getItem('jwt');
//       if (jwt != null && jwt != '') {
//         return jwt;
//       }
//     } else {
//       console.warn('localStorage is not available on the server.');
//     }
//     return 'error';
//   }

//   fnAddApplication(formData: FormData) {
//     var token = this.fnReadToken();
//     return this.http.post(this.loan, formData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   }

//   fnRetriveAllApplications() {
//     var token = this.fnReadToken();
//     return this.http.get(this.loan, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   }

//   fnFindApplicationById(id: number) {
//     var token = this.fnReadToken();
//     return this.http.get(this.loan + '/' + id, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   }

//   fnFindLoanPlanById(id: number) {
//     var token = this.fnReadToken();
//     return this.http.get(this.loanPlan + '/' + id, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   }

//   fnUpdateApplication(application: any) {
//     var token = this.fnReadToken();
//     console.log('Token:', token); // Add logging to check the token
//     return this.http.put(
//       `${this.loan}/${application.applicationId}`,
//       application,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//   }

//   fnRetriveDocumentTypes() {
//     var token = this.fnReadToken();
//     return this.http.get(this.document, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  loan = 'http://localhost:5001/api/loanapplications'; // base URL of our API
  loanPlan = 'http://localhost:5001/api/loanplans'; // base URL of our API
  document = 'http://localhost:5001/api/documenttypes'; // base URL of our API
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  fnReadToken() {
    if (this.isBrowser) {
      var jwt = localStorage.getItem('jwt');
      if (jwt != null && jwt != '') {
        return jwt;
      }
    } else {
      // console.warn('localStorage is not available on the server11.');
    }
    return 'error';
  }

  fnAddApplication(formData: FormData) {
    var token = this.fnReadToken();
    return this.http.post(this.loan, formData, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'text', // Expect a text response
    });
  }

  fnRetriveAllApplications() {
    var token = this.fnReadToken();
    return this.http.get(this.loan, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  fnFindApplicationById(id: number) {
    var token = this.fnReadToken();
    return this.http.get(this.loan + '/' + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  fnFindLoanPlanById(id: number) {
    var token = this.fnReadToken();
    return this.http.get(this.loanPlan + '/' + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  fnUpdateApplication(application: any) {
    var token = this.fnReadToken();
    // console.log('Token:', token); // Add logging to check the token
    return this.http.put(
      `${this.loan}/${application.applicationId}`,
      application,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }

  fnRetriveDocumentTypes() {
    var token = this.fnReadToken();
    return this.http.get(this.document, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  fnGetSupportingDocument(applicationId: number) {
    var token = this.fnReadToken();
    return this.http.get(`${this.loan}/supportingDocuments/${applicationId}`, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'blob', // Ensure the response is treated as a binary file
    });
  }
}
