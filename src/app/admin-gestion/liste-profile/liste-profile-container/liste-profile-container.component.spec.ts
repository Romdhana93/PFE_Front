import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfileContainerComponent } from './liste-profile-container.component';

describe('ListeProfileContainerComponent', () => {
  let component: ListeProfileContainerComponent;
  let fixture: ComponentFixture<ListeProfileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProfileContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
