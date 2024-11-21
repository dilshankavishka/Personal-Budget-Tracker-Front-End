import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeGraphComponent } from './income-graph.component';

describe('IncomeGraphComponent', () => {
  let component: IncomeGraphComponent;
  let fixture: ComponentFixture<IncomeGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
