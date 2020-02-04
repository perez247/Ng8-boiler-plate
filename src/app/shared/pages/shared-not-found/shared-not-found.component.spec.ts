import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNotFoundComponent } from './shared-not-found.component';

describe('SharedNotFoundComponent', () => {
  let component: SharedNotFoundComponent;
  let fixture: ComponentFixture<SharedNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
