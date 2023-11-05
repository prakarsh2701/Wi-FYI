import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgratingComponent } from './avgrating.component';

describe('AvgratingComponent', () => {
  let component: AvgratingComponent;
  let fixture: ComponentFixture<AvgratingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvgratingComponent]
    });
    fixture = TestBed.createComponent(AvgratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
