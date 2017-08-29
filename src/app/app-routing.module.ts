import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    loadChildren: 'app/components/+clients/+clients.module#ClientsModule'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
