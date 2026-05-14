import {
  Component,
  Inject,
  OnInit,
  inject
} from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

import {Contract }from '../../../../shared/models/contracts/contract.model';
import {AgreementSimulation} from '../../../../shared/models/agreements/agreement-simulation.model';
import {AgreementsService }from '../../../agreements/services/agreements.service';

@Component({
  selector: 'app-agreement-create-dialog',
  standalone: true,
  imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule
    ],
  templateUrl:
    './agreement-create-dialog.html',

  styleUrls:
    ['./agreement-create-dialog.scss']
})
export class AgreementCreateDialog
implements OnInit {

  private readonly agreementsService =
    inject(AgreementsService);

  simulation?: AgreementSimulation;

  loading = true;

  creating = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public contract: Contract,

    private dialogRef:
      MatDialogRef<AgreementCreateDialog>
  ) {}

  ngOnInit(): void {

    this.loadSimulation();
  }

  loadSimulation(): void {

    this.agreementsService
      .simulate(this.contract.id)
      .subscribe({
        next: (response) =>
        {
          this.simulation = response;

          this.loading = false;
        },

        error: () =>
        {
          this.loading = false;
        }
      });
  }

  confirm(): void {

    this.creating = true;

    this.agreementsService
      .createAgreement(this.contract.id)
      .subscribe({
        next: () =>
        {
          this.creating = false;

          this.dialogRef.close(true);
        },

        error: () =>
        {
          this.creating = false;
        }
      });
  }

  cancel(): void {

    this.dialogRef.close(false);
  }
}
