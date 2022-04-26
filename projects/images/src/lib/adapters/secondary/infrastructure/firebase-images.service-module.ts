import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseImagesService } from './firebase-images.service';
import { GETS_ALL_IMAGES_DTO } from '../../../application/ports/secondary/gets-all-images.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseImagesService, { provide: GETS_ALL_IMAGES_DTO, useExisting: FirebaseImagesService }],
	exports: []
})
export class FirebaseImagesServiceModule {
}
