import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard-page/dashboard-page')
            .then(c => c.DashboardPage)
      },
      {
        path: 'contracts',
        loadComponent: () =>
          import('./features/contracts/pages/contract-list-page/contract-list-page')
            .then(c => c.ContractListPage)
      },
      {
        path: 'agreements',
        loadComponent: () =>
          import('./features/agreements/pages/agreement-page/agreement-list-page')
            .then(c => c.AgreementListPage)
      },
      {
        path: 'billets',
        loadComponent: () =>
          import('./features/billets/pages/billet-page/billet-page')
            .then(c => c.BilletPage)
      }
    ]
  }
];
