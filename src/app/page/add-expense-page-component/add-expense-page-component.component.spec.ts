import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensePageComponentComponent } from './add-expense-page-component.component';

describe('AddExpensePageComponentComponent', () => {
  let component: AddExpensePageComponentComponent;
  let fixture: ComponentFixture<AddExpensePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpensePageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpensePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
