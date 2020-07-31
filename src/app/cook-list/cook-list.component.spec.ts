import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookListComponent } from './cook-list.component';

describe('CookListComponent', () => {
  let component: CookListComponent;
  let fixture: ComponentFixture<CookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
