import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePostsComponent } from './private-posts.component';

describe('PrivatePostsComponent', () => {
  let component: PrivatePostsComponent;
  let fixture: ComponentFixture<PrivatePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
