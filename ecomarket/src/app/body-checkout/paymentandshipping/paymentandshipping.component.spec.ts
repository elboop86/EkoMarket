import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentandshippingComponent } from './paymentandshipping.component';

describe('PaymentandshippingComponent', () => {
  let component: PaymentandshippingComponent;
  let fixture: ComponentFixture<PaymentandshippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentandshippingComponent]
    });
    fixture = TestBed.createComponent(PaymentandshippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
