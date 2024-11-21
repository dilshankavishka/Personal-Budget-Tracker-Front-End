import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIncomesViewComponentComponent } from './all-incomes-view-component.component';

describe('AllIncomesViewComponentComponent', () => {
  let component: AllIncomesViewComponentComponent;
  let fixture: ComponentFixture<AllIncomesViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllIncomesViewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIncomesViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
