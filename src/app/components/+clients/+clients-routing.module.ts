/**
 * Created by svitlanamishchuk on 8/29/17.
 */

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ClientsComponent } from './+clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: 'create',
        loadChildren: 'app/components/+client/+client.module#ClientModule'
      },
      {
        path: ':id',
        loadChildren: 'app/components/+client/+client.module#ClientModule'
      }
    ]
  }
];

export const ClientsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
