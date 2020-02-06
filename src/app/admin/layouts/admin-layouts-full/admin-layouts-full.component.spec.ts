import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutsFullComponent } from './admin-layouts-full.component';

describe('AdminLayoutsFullComponent', () => {
  let component: AdminLayoutsFullComponent;
  let fixture: ComponentFixture<AdminLayoutsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutsFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
