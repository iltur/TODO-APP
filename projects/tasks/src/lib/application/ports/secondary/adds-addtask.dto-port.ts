import { InjectionToken } from '@angular/core';
import { AddtaskDTO } from './addtask.dto';

export const ADDS_ADDTASK_DTO = new InjectionToken<AddsAddtaskDtoPort>('ADDS_ADDTASK_DTO');

export interface AddsAddtaskDtoPort {
  add(addtask: Partial<AddtaskDTO>): void;
}
