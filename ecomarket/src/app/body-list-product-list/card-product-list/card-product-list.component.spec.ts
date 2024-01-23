import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductListComponent } from './card-product-list.component';

describe('CardProductListComponent', () => {
  let component: CardProductListComponent;
  let fixture: ComponentFixture<CardProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProductListComponent]
    });
    fixture = TestBed.createComponent(CardProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
