import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseProjectComponent } from './test-case-project.component';

describe('TestCaseProjectComponent', () => {
  let component: TestCaseProjectComponent;
  let fixture: ComponentFixture<TestCaseProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
