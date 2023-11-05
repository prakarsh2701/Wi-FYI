import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesCrudComponent } from './packages-crud.component';

describe('PackagesCrudComponent', () => {
  let component: PackagesCrudComponent;
  let fixture: ComponentFixture<PackagesCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesCrudComponent]
    });
    fixture = TestBed.createComponent(PackagesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
