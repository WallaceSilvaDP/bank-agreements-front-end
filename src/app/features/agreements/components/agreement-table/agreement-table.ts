import {
  Component,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { MatTableModule }
from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


import { Agreement }from '../../../../shared/models/agreements/agreement.model';

@Component({
  selector: 'app-agreement-table',

  standalone: true,

  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ],

  templateUrl: './agreement-table.html',

  styleUrls: ['./agreement-table.scss']
})
export class AgreementTable {

  @Input()
  agreements: Agreement[] = [];

  @Output()
  view = new EventEmitter<Agreement>();

  displayedColumns: string[] = [
    'number',
    'contractNumber',
    'dueDate',
    'amount',
    'totalInstallments',
    'actions'
  ];

  viewAgreement( agreement: Agreement ): void {
    this.view.emit(agreement);
  }
}
