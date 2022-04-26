import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesDTO } from './images.dto';

export const GETS_ALL_IMAGES_DTO = new InjectionToken<GetsAllImagesDtoPort>('GETS_ALL_IMAGES_DTO');

export interface GetsAllImagesDtoPort {
  getAll(criterion?: Partial<ImagesDTO>): Observable<ImagesDTO[]>;
}
