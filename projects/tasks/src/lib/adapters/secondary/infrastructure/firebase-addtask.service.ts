import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsAddtaskDtoPort } from '../../../application/ports/secondary/adds-addtask.dto-port';
import { AddtaskDTO } from '../../../application/ports/secondary/addtask.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllAddtaskDtoPort } from '../../../application/ports/secondary/gets-all-addtask.dto-port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseAddtaskService implements AddsAddtaskDtoPort, GetsAllAddtaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(addtask: Partial<AddtaskDTO>): void {
    this._client.collection('tasks').add(addtask);
  }

  getAll(criterion: Partial<AddtaskDTO>): Observable<AddtaskDTO[]> {
    return this._client.collection<AddtaskDTO>('tasks').valueChanges(({ idField: 'id' })).pipe(map((data: AddtaskDTO[]) => filterByCriterion(data, criterion)));
  }
}
