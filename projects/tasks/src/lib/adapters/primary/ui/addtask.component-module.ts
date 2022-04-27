import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtaskComponent } from './addtask.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddtaskComponent],
  	providers: [],
  	exports: [AddtaskComponent] })
export class AddtaskComponentModule {
}
