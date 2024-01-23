import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufixedComponent } from './menufixed.component';

describe('MenufixedComponent', () => {
  let component: MenufixedComponent;
  let fixture: ComponentFixture<MenufixedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenufixedComponent]
    });
    fixture = TestBed.createComponent(MenufixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
