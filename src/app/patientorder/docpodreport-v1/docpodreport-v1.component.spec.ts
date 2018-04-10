import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpodreportV1Component } from './docpodreport-v1.component';

describe('DocpodreportV1Component', () => {
  let component: DocpodreportV1Component;
  let fixture: ComponentFixture<DocpodreportV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocpodreportV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocpodreportV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
