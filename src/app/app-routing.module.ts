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
  },
  {
    path: 'client',
    loadChildren: 'app/components/+client/+client.module#ClientModule'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
