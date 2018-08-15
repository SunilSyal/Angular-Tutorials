import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module'; // Added here
import { ClassesComponent } from './classes.component';
import { SchoolComponent } from '../school/school.component';
import { PrimaryComponent } from '../primary/primary.component';
import { MiddleSchoolComponent } from '../middle-school/middle-school.component';
import { OfficeComponent } from '../office/office.component';
import { TotalBetterStaffService } from "../../services/betterStaff/betterStaff.service";
import { Observable } from "rxjs";

describe('ClassesComponent', () => {
  let component: ClassesComponent;
  let fixture: ComponentFixture<ClassesComponent>;
  let mockHub;

  beforeEach(async(() => {
    mockHub = jasmine.createSpyObj('totalBetterStaffService', ['calculateTotalStaff']);
    mockHub.calculateTotalStaff.and.returnValue(Observable.of(
      { 
        totalCount: 22
      }
    )
  );

    TestBed.configureTestingModule({
      declarations: [ 
        ClassesComponent,
        SchoolComponent,
        PrimaryComponent,
        MiddleSchoolComponent,
        OfficeComponent
      ],
      providers: [
        {
          provide: APP_BASE_HREF, useValue : '/' 
        }, 
        {
          provide: TotalBetterStaffService,
          useValue: mockHub
        }
      ],
      imports: [
        AppRoutingModule
      ]
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

  it('should check the value of total teachers ==== Test will fail', () => {
    expect(component.totalTeachers).toEqual(2);
  });

  it('should check the value of total teachers ==== Should pass', () => {
    expect(component.totalBetterTeachers).toEqual(22);
  });
});
