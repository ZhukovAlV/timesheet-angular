import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgdataListComponent } from './orgdata-list.component';

describe('OrgdataListComponent', () => {
  let component: OrgdataListComponent;
  let fixture: ComponentFixture<OrgdataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgdataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
