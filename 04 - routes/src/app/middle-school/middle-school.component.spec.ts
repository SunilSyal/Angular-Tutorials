import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSchoolComponent } from './middle-school.component';

describe('MiddleSchoolComponent', () => {
  let component: MiddleSchoolComponent;
  let fixture: ComponentFixture<MiddleSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
