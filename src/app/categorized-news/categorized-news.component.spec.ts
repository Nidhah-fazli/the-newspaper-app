import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedNewsComponent } from './categorized-news.component';

describe('CategorizedNewsComponent', () => {
  let component: CategorizedNewsComponent;
  let fixture: ComponentFixture<CategorizedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizedNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
