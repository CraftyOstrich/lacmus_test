/**
 * Created by svitlanamishchuk on 8/29/17.
 */

import { NgModule } from '@angular/core';

import { ClientsRoutingModule } from './+clients-routing.module';
import { ClientsComponent } from './+clients.component';
import { CommonModule } from '@angular/common';

 @NgModule({
     imports: [
       CommonModule,
       ClientsRoutingModule
     ],
     declarations: [
       ClientsComponent
     ]
 })
 export class ClientsModule { }
