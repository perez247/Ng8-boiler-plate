import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutsFullComponent } from './public-layouts-full.component';

describe('PublicLayoutsFullComponent', () => {
  let component: PublicLayoutsFullComponent;
  let fixture: ComponentFixture<PublicLayoutsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicLayoutsFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
