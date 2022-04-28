import { InjectionToken } from '@angular/core';
import { AddtaskDTO } from './addtask.dto';

export const SETS_ADDTASK_DTO = new InjectionToken<SetsAddtaskDtoPort>('SETS_ADDTASK_DTO');

export interface SetsAddtaskDtoPort {
  set(addtask: Partial<AddtaskDTO>): void;
}
