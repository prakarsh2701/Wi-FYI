import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardDialogComponent } from './list-card-dialog.component';

describe('ListCardDialogComponent', () => {
  let component: ListCardDialogComponent;
  let fixture: ComponentFixture<ListCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
