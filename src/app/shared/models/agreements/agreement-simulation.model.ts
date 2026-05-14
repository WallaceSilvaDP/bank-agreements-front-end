export interface AgreementSimulation {

  id: string;

  number: number;

  contractId: string;

  contractNumber: string;

  dueDate: string;

  amount: number;

  totalInstallments: number;

  institutionName: string;

  maxInstallmentsAllowed: number;

  applicableInterestRate: number;

  openDebtAmount: number;

  installments: AgreementInstallment[];

  isValid: boolean;

  validationMessage: string | null;

  numberOfInstallments: number;

  firstDueDate: string;
}

export interface AgreementInstallment {

  number: number;

  dueDate: string;

  amount: number;
}
