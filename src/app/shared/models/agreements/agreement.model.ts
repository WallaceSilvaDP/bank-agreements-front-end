import { Installment } from "../installments/installment.model";

export interface Agreement {
  id: string;
  number: string;
  contractId: string;
  contractNumber: string;
  dueDate: string;
  amount: number;
  installments: Installment[];
}
