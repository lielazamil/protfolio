/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

bootstrapApplication(AppComponent, {
  providers: [
    { provide: BrowserAnimationsModule, useValue: true }, 
    ...appConfig.providers 
  ]
})
.catch((err) => console.error(err));
