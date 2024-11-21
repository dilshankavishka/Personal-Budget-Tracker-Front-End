import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncomeComponentComponent } from './add-income-component.component';

describe('AddIncomeComponentComponent', () => {
  let component: AddIncomeComponentComponent;
  let fixture: ComponentFixture<AddIncomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIncomeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIncomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
