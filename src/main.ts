import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { IndexComponent } from './app/index/index.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
