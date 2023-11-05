import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPlansComponent } from './check-plans.component';

describe('CheckPlansComponent', () => {
  let component: CheckPlansComponent;
  let fixture: ComponentFixture<CheckPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckPlansComponent]
    });
    fixture = TestBed.createComponent(CheckPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
