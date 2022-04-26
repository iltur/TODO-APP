import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewTaskPage } from './new-task.page';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewTaskPage,
      }
    ])],
  declarations: [NewTaskPage],
  providers: [],
  exports: []
})
export class NewTaskPageModule {
}
