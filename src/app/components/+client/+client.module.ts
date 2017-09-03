/**
 * Created by svitlanamishchuk on 8/29/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { ClientComponent } from './+client.component';
import { ClientRoutingModule } from './+client-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ClientRoutingModule,
      MyDatePickerModule
    ],
    declarations: [
      ClientComponent
    ]
})
export class ClientModule { }

