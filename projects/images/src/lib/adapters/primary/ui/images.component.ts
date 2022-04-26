import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesDTO } from '../../../application/ports/secondary/images.dto';
import { GETS_ALL_IMAGES_DTO, GetsAllImagesDtoPort } from '../../../application/ports/secondary/gets-all-images.dto-port';

@Component({
    selector: 'lib-images',
    templateUrl: './images.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent {
    images$: Observable<ImagesDTO[]> = this._getsAllImagesDto.getAll();

    constructor(@Inject(GETS_ALL_IMAGES_DTO) private _getsAllImagesDto: GetsAllImagesDtoPort) {
    }
}
