import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediabeticV1Component } from './prediabetic-v1.component';

describe('PrediabeticV1Component', () => {
  let component: PrediabeticV1Component;
  let fixture: ComponentFixture<PrediabeticV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrediabeticV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediabeticV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
