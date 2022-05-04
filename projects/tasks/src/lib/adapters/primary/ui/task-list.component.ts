import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AddtaskDTO } from '../../../application/ports/secondary/addtask.dto';
import {
    GETS_ALL_ADDTASK_DTO,
    GetsAllAddtaskDtoPort,
} from '../../../application/ports/secondary/gets-all-addtask.dto-port';
import {
    SETS_ADDTASK_DTO,
    SetsAddtaskDtoPort,
} from '../../../application/ports/secondary/sets-addtask.dto-port';
import { REMOVES_ADDTASK_DTO, RemovesAddtaskDtoPort } from '../../../application/ports/secondary/removes-addtask.dto-port';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
    selector: 'lib-task-list',
    templateUrl: './task-list.component.html',
    providers: [
        {
            provide: BsDropdownConfig,
            useValue: { isAnimated: true, autoClose: true },
        },
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TaskListComponent {
    taskList$: Observable<AddtaskDTO[]> = this._getsAllAddtaskDto.getAll();

    constructor(
        @Inject(GETS_ALL_ADDTASK_DTO)
        private _getsAllAddtaskDto: GetsAllAddtaskDtoPort,
        @Inject(SETS_ADDTASK_DTO) private _setsAddtaskDto: SetsAddtaskDtoPort, @Inject(REMOVES_ADDTASK_DTO) private _removesAddtaskDto: RemovesAddtaskDtoPort
    ) { }

    onRadioCheckeded(task: AddtaskDTO): void {
        if (task.radio == true) {
            this._setsAddtaskDto.set({
                id: task.id,
                name: task.name,
                radio: false
            })
        }
        if (task.radio == false) {
            this._setsAddtaskDto.set({
                id: task.id,
                name: task.name,
                radio: true
            })
        }
    }

    onTaskDeleteed(task: AddtaskDTO): void {
        this._removesAddtaskDto.remove(task.id);
    }
}
