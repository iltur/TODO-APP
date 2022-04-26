import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllImagesDtoPort } from '../../../application/ports/secondary/gets-all-images.dto-port';
import { ImagesDTO } from '../../../application/ports/secondary/images.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseImagesService implements GetsAllImagesDtoPort {
  constructor(private _client: AngularFirestore) { }

  getAll(criterion: Partial<ImagesDTO>): Observable<ImagesDTO[]> {
    return this._client
      .collection<ImagesDTO>('images')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: ImagesDTO[]) => filterByCriterion(data, criterion)));
  }
}
