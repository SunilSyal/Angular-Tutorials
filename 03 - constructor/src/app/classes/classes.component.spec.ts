import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesComponent } from './classes.component';

describe('ClassesComponent', () => {
  let component: ClassesComponent;
  let fixture: ComponentFixture<ClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 class categories by default', () => {
    expect(component.totalClasses).toEqual(5);
  });

  it('should render 2 buttons', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.classes__item').length).toEqual(2);
  });

  it('should render 4 buttons and all should be title cases', () => {
    component.categories = ['onE', 'Two', 'three', 'fOuR']
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const cats = compiled.querySelectorAll('.classes__item');

    expect(cats.length).toEqual(4);

    expect(cats[0].innerHTML).toEqual('One');
    expect(cats[3].innerHTML).toEqual('Four');
    expect(cats[1].innerHTML).not.toEqual('two');
  });
});
