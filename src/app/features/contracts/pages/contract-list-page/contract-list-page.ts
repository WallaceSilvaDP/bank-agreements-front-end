import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PageHeader } from '../../../../shared/components/page-header/page-header';

import { ContractTable } from '../../components/contract-table/contract-table';
import { Contract } from '../../../../shared/models/contracts/contract.model';
import { ContractsService }from '../../services/contracts.service';
import { AgreementCreateDialog } from '../../dialogs/agreement-create-dialog/agreement-create-dialog';

@Component({
  selector: 'app-contract-list-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    PageHeader,
    ContractTable
  ],
  templateUrl: './contract-list-page.html',
  styleUrl: './contract-list-page.scss'
})
export class ContractListPage implements OnInit {

  private readonly contractsService = inject(ContractsService);
  contracts: Contract[] = [];

  private readonly dialog = inject(MatDialog);

  loading = false;

  ngOnInit(): void {

    this.loadContracts();
  }

  loadContracts(): void {

    this.loading = true;

    this.contractsService
      .getAll()
      .subscribe({
        next: (response) => {

          this.contracts = response;
          this.loading = false;
          console.log(response);
        },
        error: () => {

          this.loading = false;
        }
      });
  }

  openAgreementModal(contract: Contract): void {
    this.dialog.open(
    AgreementCreateDialog,
    {
      width: '700px',

      data: contract
    });
  }
}
