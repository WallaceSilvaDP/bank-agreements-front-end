import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { ContractTable } from '../../components/contract-table/contract-table';

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
export class ContractListPage {

}
