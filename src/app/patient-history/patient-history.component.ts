import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
  patient = {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    contact: '(123) 456-7890',
    allergies: 'Penicillin',
    chronicConditions: 'Hypertension, Diabetes',
    medications: 'Metformin, Lisinopril',
    pastVisits: [
      {
        date: '2023-01-15',
        reason: 'Routine Checkup',
        notes: 'Blood pressure stable, continue current medications.'
      },
      {
        date: '2022-12-10',
        reason: 'Follow-up',
        notes: 'Adjusted medication dosage.'
      },
      {
        date: '2022-11-05',
        reason: 'Initial Consultation',
        notes: 'Diagnosed with hypertension and diabetes.'
      }
    ]
  };
}
