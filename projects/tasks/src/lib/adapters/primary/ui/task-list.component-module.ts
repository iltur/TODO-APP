import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
	imports: [CommonModule, BsDropdownModule.forRoot()],
	declarations: [TaskListComponent],
	providers: [],
	exports: [TaskListComponent]
})
export class TaskListComponentModule {
}
