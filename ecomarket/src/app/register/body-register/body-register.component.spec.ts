import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRegisterComponent } from './body-register.component';

describe('BodyRegisterComponent', () => {
  let component: BodyRegisterComponent;
  let fixture: ComponentFixture<BodyRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRegisterComponent]
    });
    fixture = TestBed.createComponent(BodyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
