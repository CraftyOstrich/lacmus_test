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
    pathMatch: 'full'
  }
];

export const ClientsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
