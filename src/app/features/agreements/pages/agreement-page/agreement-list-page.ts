import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog }from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PageHeader } from '../../../../shared/components/page-header/page-header';

import { Agreement }from '../../../../shared/models/agreements/agreement.model';
import { AgreementsService }from '../../services/agreements.service';
import { AgreementTable }from '../../components/agreement-table/agreement-table';
import { AgreementViewDialog }from '../../dialogs/agreement-view-dialog/agreement-view-dialog';

@Component({
  selector: 'app-agreement-list-page',

  standalone: true,

  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    PageHeader,
    AgreementTable
  ],

  templateUrl: './agreement-list-page.html',

  styleUrls: ['./agreement-list-page.scss']
})
export class AgreementListPage implements OnInit {

  private readonly agreementsService = inject(AgreementsService);
  private readonly dialog =  inject(MatDialog);
  agreements: Agreement[] = [];

  ngOnInit(): void {

    this.loadAgreements();
  }

  loadAgreements(): void {

    this.agreementsService
      .getAll()
      .subscribe({
        next: (response) => {

          this.agreements = response;
        }
      });
  }

  openViewDialog(agreement: Agreement): void {

    this.dialog.open(
      AgreementViewDialog,
      {
        width: '800px',

        data: agreement.id
      });
  }

}
