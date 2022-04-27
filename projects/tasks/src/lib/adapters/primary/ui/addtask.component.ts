import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_ADDTASK_DTO, AddsAddtaskDtoPort } from '../../../application/ports/secondary/adds-addtask.dto-port';

@Component({ selector: 'lib-addtask', templateUrl: './addtask.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddtaskComponent {
  readonly addTask: FormGroup = new FormGroup({ name: new FormControl('', [Validators.required]) });

  constructor(@Inject(ADDS_ADDTASK_DTO) private _addsAddtaskDto: AddsAddtaskDtoPort) {
  }

  onAddTaskSubmited(addTask: FormGroup): void {
    if (addTask.invalid) {
      return;
    }
    this._addsAddtaskDto.add({
      name: addTask?.get('name')?.value,
    });
    this.addTask.reset();
  }
}