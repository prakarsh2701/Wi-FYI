import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProviderProfileComponent } from './update-provider-profile.component';

describe('UpdateProviderProfileComponent', () => {
  let component: UpdateProviderProfileComponent;
  let fixture: ComponentFixture<UpdateProviderProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProviderProfileComponent]
    });
    fixture = TestBed.createComponent(UpdateProviderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
