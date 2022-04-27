import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/images.component-module';
import { FirebaseImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-images.service-module';
import { ViewDateComponentModule } from '../../../projects/date/src/lib/adapters/primary/ui/view-date.component-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ]),
    ImagesComponentModule,
    FirebaseImagesServiceModule,
    ViewDateComponentModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: []
})
export class HomePageModule {
}
