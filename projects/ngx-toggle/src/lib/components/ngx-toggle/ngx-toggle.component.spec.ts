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

      expect(fixture.nativeElement.querySelector('input').disabled).toEqual(disabled);
    });

    it('should not disable input if disabled is false', () => {
      const disabled = false;
      component.disabled = disabled;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('input').disabled).toEqual(disabled);
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
    it('should emit checkedChanged', async () => {
      const checked = true;
      const resultPromise = firstValueFrom(component.checkedChanged);
      component.checked = !checked;
      fixture.detectChanges();

      fixture.nativeElement.querySelector('input').click();
      const result = await resultPromise;

      expect(result).toEqual(checked);
    });
  });
});
