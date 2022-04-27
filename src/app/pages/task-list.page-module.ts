import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { AddtaskComponentModule } from '@tasks';
import { FirebaseAddtaskServiceModule } from 'projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-addtask.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskListPage,
      }
    ]),
    AddtaskComponentModule,
    FirebaseAddtaskServiceModule
  ],
  declarations: [TaskListPage],
  providers: [],
  exports: []
})
export class TaskListPageModule {
}
