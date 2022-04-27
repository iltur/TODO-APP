import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewTaskPage } from './new-task.page';
import { ImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/images.component-module';
import { FirebaseImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-images.service-module';
import { AddtaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/addtask.component-module';
import { FirebaseAddtaskServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-addtask.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewTaskPage,
      }
    ]),
    ImagesComponentModule,
    FirebaseImagesServiceModule,
    AddtaskComponentModule,
    FirebaseAddtaskServiceModule
  ],
  declarations: [NewTaskPage],
  providers: [],
  exports: []
})
export class NewTaskPageModule {
}
