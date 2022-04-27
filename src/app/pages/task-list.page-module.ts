import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { AddtaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/addtask.component-module';
import { FirebaseAddtaskServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-addtask.service-module';
import { TaskListComponentModule } from '@tasks';
@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskListPage,
      }
    ]),
    AddtaskComponentModule,
    FirebaseAddtaskServiceModule,
    AddtaskComponentModule,
    TaskListComponentModule
  ],
  declarations: [TaskListPage],
  providers: [],
  exports: []
})
export class TaskListPageModule {
}
