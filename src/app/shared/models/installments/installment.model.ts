export interface Installment {
  id: string;
  number: string;
  amount: number;
  dueDate: string;
  paid: boolean;
  overdue: boolean;
}
