import { TestBed } from '@angular/core/testing';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxToggleComponent } from 'ngx-toggle';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxAnimatedCounterModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
        NgxToggleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-toggle-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngx-toggle-example');
  });

  it('should render ngx-toggle', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ngx-toggle i')).toBeTruthy();
  });
});
