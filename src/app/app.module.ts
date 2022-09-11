import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserFormModule } from '@custom-libs/user-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
