import { Component, Input } from '@angular/core';
import { ButtonComponent} from '../button/button.component';
import { FormTarget } from './form-target';

@Component({
  selector: 'app-submit-button',
  template: '<input  type="submit" [autofocus]="autofocus" [disabled]="disabled" [formaction]="formActionUrl" [name]="name" [value]="value" ng-click="clickHandler($event)"/>',
  // [formenctype]="formEncType" [formnovalidate]="formNoValidate" [formtarget]="getFormTarget()"
  styles: []
})
export class SubmitButtonComponent extends ButtonComponent {
  @Input() formActionUrl: string = '';
  @Input() formEncType: string = 'application/x-www-form-urlencoded';
  @Input() formNoValidate: boolean = false;
  @Input() formTarget: FormTarget = FormTarget.Blank;

  getFormTarget(): string {
    let target = '_blank';

    switch(this.formTarget) {
      case FormTarget.Blank:
        target = '_blank';
        break;
      case FormTarget.Self:
        target = '_self';
        break;
      case FormTarget.Parent:
        target = '_parent';
        break;
      case FormTarget.Top:
        target = '_top';
        break;
      default:
        target = '_blank';
    }

    return target;
  }
}
