import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AddtaskDTO } from './addtask.dto';

export const GETS_ALL_ADDTASK_DTO = new InjectionToken<GetsAllAddtaskDtoPort>('GETS_ALL_ADDTASK_DTO');

export interface GetsAllAddtaskDtoPort {
  getAll(criterion?: Partial<AddtaskDTO>): Observable<AddtaskDTO[]>;
}
