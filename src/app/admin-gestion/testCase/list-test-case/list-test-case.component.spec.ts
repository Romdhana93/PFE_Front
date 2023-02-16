import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestCaseComponent } from './list-test-case.component';

describe('ListTestCaseComponent', () => {
  let component: ListTestCaseComponent;
  let fixture: ComponentFixture<ListTestCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTestCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
