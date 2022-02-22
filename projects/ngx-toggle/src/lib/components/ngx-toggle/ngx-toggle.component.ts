import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-toggle',
  templateUrl: './ngx-toggle.component.html',
  styleUrls: ['./ngx-toggle.component.scss']
})
export class NgxToggleComponent {

  @Input() id = 'ngx-toggle';
  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChanged = new EventEmitter<boolean>();

  onClick(event: any): void {
    this.checkedChanged.emit(event.target.checked);
  }
}
