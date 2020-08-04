import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWeekGroceryComponent } from './total-week-grocery.component';

describe('TotalWeekGroceryComponent', () => {
  let component: TotalWeekGroceryComponent;
  let fixture: ComponentFixture<TotalWeekGroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalWeekGroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalWeekGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
