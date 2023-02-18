import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-toggle',
  templateUrl: './ngx-toggle.component.html',
  styleUrls: ['./ngx-toggle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxToggleComponent),
    multi: true
  }]
})
export class NgxToggleComponent implements ControlValueAccessor {

  @Input() id = 'ngx-toggle';
  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange: OnChangeFn = () => {};
  onTouched: OnTouchedFn = () => {};

  onClick(event: any): void {
    const checked = event.target.checked;
    this.onChange(checked);
    this.onTouched();
    this.checkedChange.emit(checked);
  }

  registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
}

type OnChangeFn = (value: boolean) => void;
type OnTouchedFn = () => void;
