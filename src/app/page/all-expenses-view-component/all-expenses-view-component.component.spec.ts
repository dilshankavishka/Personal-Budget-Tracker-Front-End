import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpensesViewComponentComponent } from './all-expenses-view-component.component';

describe('AllExpensesViewComponentComponent', () => {
  let component: AllExpensesViewComponentComponent;
  let fixture: ComponentFixture<AllExpensesViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllExpensesViewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExpensesViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
