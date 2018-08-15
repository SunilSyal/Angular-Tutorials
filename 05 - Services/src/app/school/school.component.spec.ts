import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module'; // Added here
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

import { SchoolComponent } from './school.component';
import { ClassesComponent } from '../classes/classes.component';
import { PrimaryComponent } from '../primary/primary.component';
import { MiddleSchoolComponent } from '../middle-school/middle-school.component';
import { OfficeComponent } from '../office/office.component';
import { MockComponent } from 'mock-component';

describe('SchoolComponent with route params', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SchoolComponent,
        MockComponent(ClassesComponent), 
        PrimaryComponent,
        MiddleSchoolComponent,
        OfficeComponent
      ],
      providers: [
        {
          provide: APP_BASE_HREF, 
          useValue : '/' 
        },
        {
          provide: ActivatedRoute,
          // To test the route params  
          useValue: {
            params: Observable.of(
              {
                id: 123
              }
            )
          }
        }
      ],
      imports: [
        AppRoutingModule
      ]
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

  it('should use the name passed in params', () => {
    expect(component.name).toEqual(123);
  });

  it('should have totalClasses as undefined', () => {
    expect(component.totalClasses).toEqual(undefined);
  });

  it('should set the selected item', () => {
    component.setSelectedSchool('ABCD')
    expect(component.selectedItem).toEqual('ABCD');
  });
});

describe('SchoolComponent wihout route params', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SchoolComponent, 
        MockComponent(ClassesComponent), 
        PrimaryComponent,
        MiddleSchoolComponent,
        OfficeComponent
      ],
      providers: [
        {
          provide: APP_BASE_HREF, 
          useValue : '/' 
        },
        {
          provide: ActivatedRoute,
          // To test the route params  
          useValue: {
            params: Observable.of(
              {
                id: ''
              }
            )
          }
        }
      ],
      imports: [
        AppRoutingModule
      ]
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

  it('should default name should be the first school when there is no default value in params', () => {
    expect(component.selectedItem).toEqual('ABC');
  });
});
