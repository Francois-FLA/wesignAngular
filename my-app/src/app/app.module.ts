import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { wecanopyApp } from './wecanopy-app/wecanopy-app';
import { wemanityApp } from './wemanity-app/wemanity-app';
import { barefootApp } from './barefoot-app/barefoot-app';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';






@NgModule({
  declarations: [
    AppComponent,
    wecanopyApp,
    wemanityApp,
    barefootApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
