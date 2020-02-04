import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutsContentComponent } from './public-layouts-content.component';

describe('PublicLayoutsContentComponent', () => {
  let component: PublicLayoutsContentComponent;
  let fixture: ComponentFixture<PublicLayoutsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicLayoutsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
