import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment }
from '../../../../environments/environment';

import { Agreement } from '../../../shared/models/agreements/agreement.model';
import { AgreementSimulation } from '../../../shared/models/agreements/agreement-simulation.model';

@Injectable({
  providedIn: 'root'
})
export class AgreementsService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    `${environment.apiUrl}/agreements`;

  getAll(): Observable<Agreement[]> {

    return this.http.get<Agreement[]>(
      this.apiUrl
    );
  }

  getById(id: string): Observable<Agreement> {

    return this.http.get<Agreement>(
      `${this.apiUrl}/${id}`
    );
  }



  createAgreement(contractId: string) : Observable<any> {
    return this.http.post(
      `${this.apiUrl}`,
      {
        contractId
      });
  }

  simulate(contractId: string) : Observable<AgreementSimulation> {
    return this.http.post<AgreementSimulation>(
      `${this.apiUrl}/simulate`,
      {
        contractId
      });
  }
}
