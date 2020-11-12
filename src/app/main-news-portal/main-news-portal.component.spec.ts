import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsPortalComponent } from './main-news-portal.component';

describe('MainNewsPortalComponent', () => {
  let component: MainNewsPortalComponent;
  let fixture: ComponentFixture<MainNewsPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNewsPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
