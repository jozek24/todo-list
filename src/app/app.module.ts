import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localePl from '@angular/common/locales/pl'
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pl-PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
