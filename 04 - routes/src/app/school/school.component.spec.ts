import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolComponent } from './school.component';
import { ClassesComponent } from '../classes/classes.component';

describe('SchoolComponent', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolComponent, ClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default name set in constructor', () => {
    expect(component.name).toEqual('Good School');
  });

  it('should have totalClasses as undefined', () => {
    expect(component.totalClasses).toEqual(undefined);
  });
});
