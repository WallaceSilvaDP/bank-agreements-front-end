import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contract-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './contract-table.html',
  styleUrl: './contract-table.scss'
})
export class ContractTable {

  displayedColumns = [
    'customer',
    'document',
    'contract',
    'balance',
    'status',
    'actions'
  ];

  dataSource = [
    {
      customer: 'João Silva',
      document: '123.456.789-00',
      contract: 'CTR-1001',
      balance: 'R$ 2.450,00',
      status: 'Em aberto'
    },
    {
      customer: 'Maria Souza',
      document: '987.654.321-00',
      contract: 'CTR-1002',
      balance: 'R$ 1.250,00',
      status: 'Negociado'
    },
    {
      customer: 'Carlos Lima',
      document: '456.789.123-00',
      contract: 'CTR-1003',
      balance: 'R$ 3.870,00',
      status: 'Em atraso'
    }
  ];

}
