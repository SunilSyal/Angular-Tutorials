import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { SchoolComponent } from './school/school.component';

describe('AppComponent', () => {

  let fixture; 
  let app;
  const title = 'School!!!'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ClassesComponent,
        SchoolComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title ${title}`, async(() => {
    expect(app.title).toEqual(title);
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Welcome to ${title}`);
  }));

  it('should render new title when changed in code', async(() => {
    app.title = "New School!!!"
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Welcome to ${app.title}`);
  }));
});
