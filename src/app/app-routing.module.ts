import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHistoryComponent } from './patient-history/patient-history.component';

const routes: Routes = [
  { path: 'patient-history', component: PatientHistoryComponent },
  { path: '', redirectTo: '/patient-history', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
