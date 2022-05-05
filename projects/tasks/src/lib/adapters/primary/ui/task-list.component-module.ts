import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';

@NgModule({
	imports: [CommonModule, BsDropdownModule.forRoot(), AlertModule],
	declarations: [TaskListComponent],
	providers: [AlertConfig],
	exports: [TaskListComponent]
})
export class TaskListComponentModule {
}
