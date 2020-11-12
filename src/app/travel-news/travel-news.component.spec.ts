import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelNewsComponent } from './travel-news.component';

describe('TravelNewsComponent', () => {
  let component: TravelNewsComponent;
  let fixture: ComponentFixture<TravelNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
