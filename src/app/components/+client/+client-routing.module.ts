/**
 * Created by svitlanamishchuk on 8/29/17.
 */

import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { ClientComponent } from './+client.component';

const routes: Routes = [
  {
    path: ':id',
    component: ClientComponent
  },
  {
    path: 'create',
    component: ClientComponent
  }
];

export const ClientRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
