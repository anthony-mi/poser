import { Component } from '@angular/core';
import { ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-reset-button',
  template: '<button type="reset" [autofocus]="autofocus" [disabled]="disabled" [name]="name" [value]="value"></button>',
  styles: []
})
export class ResetButtonComponent extends ButtonComponent{

}
