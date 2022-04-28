import { InjectionToken } from '@angular/core';

export const REMOVES_ADDTASK_DTO = new InjectionToken<RemovesAddtaskDtoPort>('REMOVES_ADDTASK_DTO');

export interface RemovesAddtaskDtoPort {
  remove(id: string): void;
}
