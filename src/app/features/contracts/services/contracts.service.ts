import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { Contract } from '../../../shared/models/contracts/contract.model';
import { AgreementSimulation } from '../../../shared/models/agreements/agreement-simulation.model';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/contracts`;

  getAll(): Observable<Contract[]> {

    return this.http.get<Contract[]>(
      this.apiUrl
    );
  }

  getById(id: string): Observable<Contract> {

    return this.http.get<Contract>(
      `${this.apiUrl}/${id}`
    );
  }
}
