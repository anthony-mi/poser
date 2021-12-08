import { Component, Input } from '@angular/core';
import { Action } from '../../aliases/action';

@Component({
  selector: 'app-button',
  template: '<button type="button" [autofocus]="autofocus" [disabled]="disabled" [name]="name" [value]="value" ng-click="click($event)"></button>',
  styles: []
})
export class ButtonComponent {
  @Input() autofocus = false;
  @Input() disabled = false;
  // @Input() form?: string = '';
  @Input() name?: string = undefined;
  @Input() value: string = '';
  @Input() click!: Action<object>;
}
