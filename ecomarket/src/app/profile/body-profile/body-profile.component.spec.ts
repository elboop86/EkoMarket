import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyProfileComponent } from './body-profile.component';

describe('BodyProfileComponent', () => {
  let component: BodyProfileComponent;
  let fixture: ComponentFixture<BodyProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyProfileComponent]
    });
    fixture = TestBed.createComponent(BodyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
