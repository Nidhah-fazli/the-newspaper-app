import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveNewsMobileComponent } from './live-news-mobile.component';

describe('LiveNewsMobileComponent', () => {
  let component: LiveNewsMobileComponent;
  let fixture: ComponentFixture<LiveNewsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveNewsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveNewsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
