import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutsContentComponent } from './admin-layouts-content.component';

describe('AdminLayoutsContentComponent', () => {
  let component: AdminLayoutsContentComponent;
  let fixture: ComponentFixture<AdminLayoutsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
