import {TestBed, async} from '@angular/core/testing';
import {AppComponentMain} from './app.component';
describe('AppComponentMain', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponentMain
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponentMain);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'creative-angular5-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponentMain);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('creative-angular5-app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponentMain);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to creative-angular5-app!');
  }));
});
