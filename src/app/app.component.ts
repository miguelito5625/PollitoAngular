/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { environment } from '../environments/environment';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  // constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  // }

  user = {};

  constructor(private authService: NbAuthService) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          console.log(token);
          
        }

      });
  }

  ngOnInit(): void {
    // this.analytics.trackPageViews();
    // this.seoService.trackCanonicalChanges();
    console.log("ESTO ES UNA PRUEBA");
    console.log(environment.backendUrl);
    console.log(environment.production);
    
    
  }
}
