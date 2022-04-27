import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewTaskPage } from './new-task.page';
import { ImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/images.component-module';
import { FirebaseImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-images.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewTaskPage,
      }
    ]),
    ImagesComponentModule,
    FirebaseImagesServiceModule
  ],
  declarations: [NewTaskPage],
  providers: [],
  exports: []
})
export class NewTaskPageModule {
}
