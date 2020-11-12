import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNewsMainComponent } from './trending-news-main.component';

describe('TrendingNewsMainComponent', () => {
  let component: TrendingNewsMainComponent;
  let fixture: ComponentFixture<TrendingNewsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingNewsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
