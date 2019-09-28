import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardPage } from './flashcard.page';

describe('FlashcardPage', () => {
  let component: FlashcardPage;
  let fixture: ComponentFixture<FlashcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
