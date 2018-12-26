import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRecursiveBaliseComponent } from './book-recursive-balise.component';

describe('BookRecursiveBaliseComponent', () => {
  let component: BookRecursiveBaliseComponent;
  let fixture: ComponentFixture<BookRecursiveBaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRecursiveBaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRecursiveBaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
