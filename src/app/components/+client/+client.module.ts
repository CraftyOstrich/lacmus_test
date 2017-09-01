/**
 * Created by svitlanamishchuk on 8/29/17.
 */

import { NgModule } from '@angular/core';

import { ClientComponent } from './+client.component';
import { ClientRoutingModule } from './+client-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/components/calendar/calendar';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ClientRoutingModule,
      CalendarModule
    ],
    declarations: [
      ClientComponent
    ]
})
export class ClientModule { }

