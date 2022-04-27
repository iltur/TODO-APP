import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-addtask', templateUrl: './addtask.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddtaskComponent {
  readonly newTask: FormGroup = new FormGroup({newtask: new FormControl()});
}
