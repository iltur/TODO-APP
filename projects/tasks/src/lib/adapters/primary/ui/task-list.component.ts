import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
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
    taskList$: Observable<AddtaskDTO[]> = this._getsAllAddtaskDto.getAll()
        .pipe(
            map((taskList: AddtaskDTO[]) =>
                taskList.sort((a, b) => a.count - b.count),
            )

        );


    deleteAlert: boolean = false;
    completeAlert: boolean = false;
    dismissible: boolean = true;


    constructor(
        @Inject(GETS_ALL_ADDTASK_DTO)
        private _getsAllAddtaskDto: GetsAllAddtaskDtoPort,
        private router: Router,
        @Inject(SETS_ADDTASK_DTO) private _setsAddtaskDto: SetsAddtaskDtoPort, @Inject(REMOVES_ADDTASK_DTO) private _removesAddtaskDto: RemovesAddtaskDtoPort
    ) { }

    onRadioCheckeded(task: AddtaskDTO): void {
        if (task.radio == true) {
            this._setsAddtaskDto.set({
                id: task.id,
                name: task.name,
                radio: false,
                count: task.count,
            })
        }
        if (task.radio == false) {
            this._setsAddtaskDto.set({
                id: task.id,
                name: task.name,
                radio: true,
                count: task.count,
            })
        }
    }

    onTaskDeleteed(task: AddtaskDTO, taskList: AddtaskDTO[]): void {
        if (confirm("Are you sure you want to delete this task?")) {
            this._removesAddtaskDto.remove(task.id);
            this.deleteAlert = true;
            if (taskList.length - 1 < 1) {
                // moze być tez if.taskList.length <2
                this.router.navigate(['/']);
            }
        }

    }
    showCompleteAlert(): void {
        this.completeAlert = true;
    }


    close(): void {
        this.deleteAlert = false;
        this.completeAlert = false;

    }



}


