import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild, OnInit, Input, Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { Observable } from 'rxjs';

import { Patient } from '../../shared/models/index';

import { PatientsService } from '../../core/services/index';
import { PatientDialogComponent } from '../patient-dialog/patient-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})



export class PatientListComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'name', 'age', 'weight', 'email', 'edit', 'remove'];

  dataSource = new MatTableDataSource<Patient>([]);


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router, private dialog: MatDialog,
  private patientsService: PatientsService,
  private changeDetectorRefs: ChangeDetectorRef)
  {
     this.patientsService.getAllPatients().subscribe((patients: Patient[]) => {
                                                                 this.dataSource.data = patients;
                                                               });
  }

   ngOnInit() {
      this.refresh();
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

   openDialog(): void {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
                 data: {dialogTitle: 'Add a new patient',
                        patient_id: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
                                    this.refresh();
                      });
    }

    remove(patient: Patient)
    {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
                     data: {dialogTitle: 'Delete the patient '+patient.firstname +' '+ patient.name+' ?',
                            patient_id: patient.id}
      });

      dialogRef.afterClosed().subscribe(result => {
                              this.refresh();
                });
    }

    edit(patient: Patient)
    {
        const dialogRef = this.dialog.open(PatientDialogComponent, {
                     data: {dialogTitle: 'Edit a patient',
                            patient_id: patient.id}
        });

        dialogRef.afterClosed().subscribe(result => {
                      this.refresh();
        });
    }

     refresh() {
          this.patientsService.getAllPatients().subscribe((patients: Patient[]) => {
                   this.dataSource.data = patients;
                   this.changeDetectorRefs.detectChanges();
          });
      }

}