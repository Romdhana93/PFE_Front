import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTestContainerComponent } from './liste-test-container.component';

describe('ListeTestContainerComponent', () => {
  let component: ListeTestContainerComponent;
  let fixture: ComponentFixture<ListeTestContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTestContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
