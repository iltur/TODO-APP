import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AddtaskDTO } from '../../../application/ports/secondary/addtask.dto';
import { GETS_ALL_ADDTASK_DTO, GetsAllAddtaskDtoPort } from '../../../application/ports/secondary/gets-all-addtask.dto-port';

@Component({ selector: 'lib-task-list', templateUrl: './task-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TaskListComponent {
    taskList$: Observable<AddtaskDTO[]> = this._getsAllAddtaskDto.getAll();

    constructor(@Inject(GETS_ALL_ADDTASK_DTO) private _getsAllAddtaskDto: GetsAllAddtaskDtoPort) {
    }
}
