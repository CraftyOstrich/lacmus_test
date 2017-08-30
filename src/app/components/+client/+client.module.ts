/**
 * Created by svitlanamishchuk on 8/29/17.
 */

import { NgModule } from '@angular/core';

import { ClientComponent } from './+client.component';
import { ClientRoutingModule } from './+client-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      ClientRoutingModule
    ],
    declarations: [
      ClientComponent
    ]
})
export class ClientModule { }

