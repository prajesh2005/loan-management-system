// // import { TitleCasePipe } from '@angular/common';
// // import { Component, DoCheck, Inject, PLATFORM_ID } from '@angular/core';
// // import { RouterLink } from '@angular/router';
// // import { LoginService } from '../login.service';
// // import { isPlatformBrowser } from '@angular/common';

// // @Component({
// //   selector: 'app-nav',
// //   imports: [RouterLink, TitleCasePipe],
// //   templateUrl: './nav.component.html',
// //   styleUrl: './nav.component.css',
// // })
// // export class NavComponent implements DoCheck {
// //   status = 'login';
// //   private isBrowser: boolean;

// //   constructor(
// //     private ls: LoginService,
// //     @Inject(PLATFORM_ID) private platformId: object
// //   ) {
// //     this.isBrowser = isPlatformBrowser(platformId);
// //   }

// //   ngDoCheck(): void {
// //     if (this.isBrowser) {
// //       this.ls.checkLoginStatus().subscribe((s) => {
// //         this.status = <any>s;
// //       });
// //     } else {
// //       console.warn('localStorage is not available on the server.');
// //     }
// //   }
// // }

// import { CommonModule, TitleCasePipe } from '@angular/common';
// import { Component, DoCheck, Inject, PLATFORM_ID } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { LoginService } from '../login.service';
// import { isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-nav',
//   imports: [RouterLink, TitleCasePipe, CommonModule],
//   templateUrl: './nav.component.html',
//   styleUrl: './nav.component.css',
// })
// export class NavComponent implements DoCheck {
//   status = 'login';
//   private isBrowser: boolean;
//   isManager: boolean = false; // Add this line

//   constructor(
//     private ls: LoginService,
//     @Inject(PLATFORM_ID) private platformId: object
//   ) {
//     this.isBrowser = isPlatformBrowser(platformId);
//   }

//   ngDoCheck(): void {
//     if (this.isBrowser) {
//       this.ls.checkLoginStatus().subscribe((s) => {
//         this.status = <any>s;
//         this.isManager = this.ls.isManager(); // Add this line
//       });
//     } else {
//       console.warn('localStorage is not available on the server.');
//     }
//   }
// }

import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, DoCheck, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../services/login.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, TitleCasePipe, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements DoCheck {
  status = 'login';
  private isBrowser: boolean;
  isManager: boolean = false;

  constructor(
    private ls: LoginService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngDoCheck(): void {
    if (this.isBrowser) {
      this.ls.checkLoginStatusObservable().subscribe((s) => {
        this.status = <any>s;
        this.isManager = this.ls.isManager();
      });
    } else {
      // console.warn('localStorage is not available on the server21.');
    }
  }
}
