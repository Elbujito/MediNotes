import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {PatientsService} from '../../shared/services/patients.service';
import {Patient} from '../../shared/models/patient.model';
import { NgForm } from '@angular/forms';

import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-patient-confirm-dialog',
  templateUrl: './patient-confirm-dialog.component.html',
  styleUrls: ['./patient-confirm-dialog.component.css']
})
export class PatientConfirmDialogComponent implements OnInit {
  public patient: Patient;

    constructor(private patientsService: PatientsService,
    public dialogRef: MatDialogRef<PatientConfirmDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit() {
     if(this.data.patient_id != '')
      {
        this.patientsService.getPatientById(this.data.patient_id).subscribe(patient => {
        this.patient = patient;
      });
     }
  }

  public onSubmit() {
      this.dialogRef.close(true);
      this.patientsService.removePatient(this.patient).subscribe(result => { });
   }

  close() {
    this.dialogRef.close(null);
  }

}
