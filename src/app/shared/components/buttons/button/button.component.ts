import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent {
  @Input() autofocus = false;
  @Input() disabled = false;
  @Input() name?: string = undefined;
  @Input() value: string = '';
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  handleClick(event: any): void {
    this.clicked.emit(event);
  }
}
