import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedataListComponent } from './timedata-list.component';

describe('TimedataListComponent', () => {
  let component: TimedataListComponent;
  let fixture: ComponentFixture<TimedataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
