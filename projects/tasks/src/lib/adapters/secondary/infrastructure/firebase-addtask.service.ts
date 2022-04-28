import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsAddtaskDtoPort } from '../../../application/ports/secondary/adds-addtask.dto-port';
import { AddtaskDTO } from '../../../application/ports/secondary/addtask.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllAddtaskDtoPort } from '../../../application/ports/secondary/gets-all-addtask.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { RemovesAddtaskDtoPort } from '../../../application/ports/secondary/removes-addtask.dto-port';
import { SetsAddtaskDtoPort, SETS_ADDTASK_DTO } from '../../../application/ports/secondary/sets-addtask.dto-port';


@Injectable()
export class FirebaseAddtaskService implements AddsAddtaskDtoPort, GetsAllAddtaskDtoPort, RemovesAddtaskDtoPort, SetsAddtaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(addtask: Partial<AddtaskDTO>): void {
    this._client.collection('tasks').add(addtask);
  }

  getAll(criterion: Partial<AddtaskDTO>): Observable<AddtaskDTO[]> {
    return this._client.collection<AddtaskDTO>('tasks').valueChanges(({ idField: 'id' })).pipe(map((data: AddtaskDTO[]) => filterByCriterion(data, criterion)));
  }

  remove(id: string): void {
    this._client.doc('addtasks/' + id).delete();
  }

  set(addtask: Partial<AddtaskDTO>): void {
    this._client.doc('tasks/' + addtask.id).update(addtask);
  }
}
