import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAccordionComponent } from './address-accordion.component';

describe('AddressAccordionComponent', () => {
  let component: AddressAccordionComponent;
  let fixture: ComponentFixture<AddressAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressAccordionComponent]
    });
    fixture = TestBed.createComponent(AddressAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
