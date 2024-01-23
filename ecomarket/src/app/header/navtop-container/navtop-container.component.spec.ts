import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtopContainerComponent } from './navtop-container.component';

describe('NavtopContainerComponent', () => {
  let component: NavtopContainerComponent;
  let fixture: ComponentFixture<NavtopContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavtopContainerComponent]
    });
    fixture = TestBed.createComponent(NavtopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
