import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsAddtaskDtoPort } from '../../../application/ports/secondary/adds-addtask.dto-port';
import { AddtaskDTO } from '../../../application/ports/secondary/addtask.dto';

@Injectable()
export class FirebaseAddtaskService implements AddsAddtaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(addtask: Partial<AddtaskDTO>): void {
    this._client.collection('tasks').add(addtask);
  }
}
