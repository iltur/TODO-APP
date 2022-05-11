import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'lib-view-date', templateUrl: './view-date.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ViewDateComponent {
    // zadeklarowanie na sztywno wartości propertasa today i pobieranie aktualnej daty z ViewDataComponent (import w .module.ts)
    today: number = Date.now()
}
