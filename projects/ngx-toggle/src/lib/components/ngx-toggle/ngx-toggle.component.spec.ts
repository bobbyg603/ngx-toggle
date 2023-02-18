import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { NgxToggleComponent } from './ngx-toggle.component';

describe('NgxToggleComponent', () => {
  let component: NgxToggleComponent;
  let fixture: ComponentFixture<NgxToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxToggleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToggleComponent);
    component = fixture.componentInstance;
    component.onChange = jasmine.createSpy();
    component.onTouched = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('checked', () => {
    it('should check input if checked is true', () => {
      const checked = true;
      component.checked = checked;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('input').checked).toEqual(checked);
    });

    it('should not check input if checked is false', () => {
      const checked = false;
      component.checked = checked;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('input').checked).toEqual(checked);
    });
  });

  describe('disabled', () => {
    it('should disable input if disabled is true', () => {
      const disabled = true;
      component.disabled = disabled;
      fixture.detectChanges();

      const input = fixture.nativeElement.querySelector('input');
      expect(input.disabled).toEqual(disabled);
      expect(input.classList).toContain('disabled');
    });

    it('should not disable input if disabled is false', () => {
      const disabled = false;
      component.disabled = disabled;
      fixture.detectChanges();

      const input = fixture.nativeElement.querySelector('input');
      expect(input.disabled).toEqual(disabled);
      expect(input.classList).not.toContain('disabled');
    });
  });

  describe('id', () => {
    it('should set id attribute on input', () => {
      const id = 'pricing-toggle';
      component.id = id;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('input').id).toEqual(id);
    });
  });

  describe('click', () => {
    it('should call onChange with new value', () => {
      const checked = true;

      component.onClick({ target: { checked } });

      expect(component.onChange).toHaveBeenCalledWith(checked);
    });

    it('should call onTouched', () => {
      const checked = true;

      component.onClick({ target: { checked } });

      expect(component.onTouched).toHaveBeenCalled();
    });

    it('should emit checkedChanged', async () => {
      const checked = true;
      const resultPromise = firstValueFrom(component.checkedChange);
      component.checked = !checked;
      fixture.detectChanges();

      fixture.nativeElement.querySelector('input').click();
      const result = await resultPromise;

      expect(result).toEqual(checked);
    });
  });

  describe('registerOnChange', () => {
    it('should set onChange', () => {
      const onChange = 'foo' as any;

      component.registerOnChange(onChange);

      expect(component.onChange).toEqual(onChange);
    });
  });

  describe('registerOnTouched', () => {
    it('should set onTouched', () => {
      const onTouched = 'foo' as any;

      component.registerOnTouched(onTouched);

      expect(component.onTouched).toEqual(onTouched);
    });
  });

  describe('setDisabledState', () => {
    it('should set disabled', () => {
      const disabled = true;

      component.setDisabledState(disabled);

      expect(component.disabled).toEqual(disabled);
    });
  });

  describe('writeValue', () => {
    it('should set checked', () => {
      const checked = true;

      component.writeValue(checked);

      expect(component.checked).toEqual(checked);
    });
  });
});
