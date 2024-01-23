import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFooterComponent } from './body-footer.component';

describe('BodyFooterComponent', () => {
  let component: BodyFooterComponent;
  let fixture: ComponentFixture<BodyFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyFooterComponent],
    });
    fixture = TestBed.createComponent(BodyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
