import {
  Component,
  Inject,
  OnInit,
  inject
} from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';

import { CommonModule }
from '@angular/common';

import { MatTableModule }
from '@angular/material/table';

import { AgreementsService } from '../../services/agreements.service';

@Component({
  selector: 'app-agreement-view-dialog',

  standalone: true,

  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule
  ],

  templateUrl:
    './agreement-view-dialog.html',

  styleUrls:
    ['./agreement-view-dialog.scss']
})
export class AgreementViewDialog
implements OnInit {

  private readonly agreementsService =
    inject(AgreementsService);

  agreement: any;

  displayedColumns = [
    'number',
    'dueDate',
    'amount'
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public agreementId: string
  ) {}

  ngOnInit(): void {

    this.loadAgreement();
  }

  loadAgreement(): void {

    this.agreementsService
      .getById(this.agreementId)
      .subscribe({
        next: response =>
        {
          this.agreement = response;
        }
      });
  }
}
