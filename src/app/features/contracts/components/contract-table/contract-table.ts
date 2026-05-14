import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Contract } from '../../../../shared/models/contracts/contract.model';

@Component({
  selector: 'app-contract-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './contract-table.html',
  styleUrl: './contract-table.scss'
})
export class ContractTable {

  @Output()
  generateAgreement = new EventEmitter<Contract>();

  openAgreementModal(contract: Contract): void {
    this.generateAgreement.emit(contract);
  }

  @Input()
  contracts: Contract[] = [];

  displayedColumns: string[] = [
    'contractNumber',
    'debtorName',
    'institutionName',
    'contractAmount',
    'debtAmount',
    'actions'
  ];
}
