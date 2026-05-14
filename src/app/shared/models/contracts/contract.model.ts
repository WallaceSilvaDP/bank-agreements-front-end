import { Installment } from '../installments/installment.model';

export interface Contract {
  id: string;
  contractNumber: string;
  debtorName: string;
  institutionName: string;
  contractAmount: number;
  debtAmount: number;
  installments: Installment[];
}
