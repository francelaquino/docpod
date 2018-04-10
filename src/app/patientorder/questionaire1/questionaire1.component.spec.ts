import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionaire1Component } from './questionaire1.component';

describe('Questionaire1Component', () => {
  let component: Questionaire1Component;
  let fixture: ComponentFixture<Questionaire1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questionaire1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionaire1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
