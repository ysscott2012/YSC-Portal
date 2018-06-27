import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeDashboardComponent } from './leetcode-dashboard.component';

describe('LeetcodeDashboardComponent', () => {
  let component: LeetcodeDashboardComponent;
  let fixture: ComponentFixture<LeetcodeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeetcodeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeetcodeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
