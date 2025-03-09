import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CommonModule,
    PatientHistoryComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }