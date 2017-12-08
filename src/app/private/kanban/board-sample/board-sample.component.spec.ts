import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSampleComponent } from './board-sample.component';

describe('BoardSampleComponent', () => {
  let component: BoardSampleComponent;
  let fixture: ComponentFixture<BoardSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
