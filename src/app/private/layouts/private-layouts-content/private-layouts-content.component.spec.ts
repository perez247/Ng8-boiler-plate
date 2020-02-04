import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLayoutsContentComponent } from './private-layouts-content.component';

describe('PrivateLayoutsContentComponent', () => {
  let component: PrivateLayoutsContentComponent;
  let fixture: ComponentFixture<PrivateLayoutsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLayoutsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLayoutsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
