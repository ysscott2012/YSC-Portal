import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseMenuComponent } from './database-menu.component';

describe('DatabaseMenuComponent', () => {
  let component: DatabaseMenuComponent;
  let fixture: ComponentFixture<DatabaseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
