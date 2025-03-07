import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';

@NgModule({
  declarations: [
    
  ],
  imports: [AppComponent,
    PatientHistoryComponent,
    BrowserModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }