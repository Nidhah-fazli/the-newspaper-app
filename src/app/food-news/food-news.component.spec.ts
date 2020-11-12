import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodNewsComponent } from './food-news.component';

describe('FoodNewsComponent', () => {
  let component: FoodNewsComponent;
  let fixture: ComponentFixture<FoodNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
