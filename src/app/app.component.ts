import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,PatientHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-to-git-app';
}
