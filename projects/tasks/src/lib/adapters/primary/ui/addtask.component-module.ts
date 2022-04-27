import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtaskComponent } from './addtask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, RouterModule],
	declarations: [AddtaskComponent],
	providers: [],
	exports: [AddtaskComponent]
})
export class AddtaskComponentModule {
}
