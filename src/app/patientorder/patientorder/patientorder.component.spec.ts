import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientorderComponent } from './patientorder.component';

describe('PatientorderComponent', () => {
  let component: PatientorderComponent;
  let fixture: ComponentFixture<PatientorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
