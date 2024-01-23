import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductListComponent } from './list-product-list.component';

describe('ListProductListComponent', () => {
  let component: ListProductListComponent;
  let fixture: ComponentFixture<ListProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductListComponent]
    });
    fixture = TestBed.createComponent(ListProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
