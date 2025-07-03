import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  providers: [provideHttpClient(withFetch()), ...(appConfig?.providers ?? [])],
}).catch((err) => console.error(err));
