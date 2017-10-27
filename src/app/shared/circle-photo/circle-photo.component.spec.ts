import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePhotoComponent } from './circle-photo.component';

describe('CirclePhotoComponent', () => {
  let component: CirclePhotoComponent;
  let fixture: ComponentFixture<CirclePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
