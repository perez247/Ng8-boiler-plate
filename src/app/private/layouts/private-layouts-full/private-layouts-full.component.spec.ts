import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLayoutsFullComponent } from './private-layouts-full.component';

describe('PrivateLayoutsFullComponent', () => {
  let component: PrivateLayoutsFullComponent;
  let fixture: ComponentFixture<PrivateLayoutsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLayoutsFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLayoutsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
