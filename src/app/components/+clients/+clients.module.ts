/**
 * Created by svitlanamishchuk on 8/29/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { ClientsRoutingModule } from './+clients-routing.module';
import { ClientsComponent } from './+clients.component';


 @NgModule({
     imports: [
       CommonModule,
       ClientsRoutingModule,
       DataTableModule,
       SharedModule
     ],
     declarations: [
       ClientsComponent
     ]
 })
 export class ClientsModule { }
