import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-jqst1astv14x5get.us.auth0.com',
      clientId: 'W9pRVK5pNDNcCk5lMiZbEEIMSYejnoAJ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
}).catch((err) => console.error(err));
