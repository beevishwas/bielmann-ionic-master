import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointofsalePage } from './pointofsale.page';

describe('PointofsalePage', () => {
  let component: PointofsalePage;
  let fixture: ComponentFixture<PointofsalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointofsalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointofsalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
