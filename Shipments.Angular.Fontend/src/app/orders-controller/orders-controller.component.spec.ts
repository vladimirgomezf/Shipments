import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersControllerComponent } from './orders-controller.component';

describe('OrdersControllerComponent', () => {
  let component: OrdersControllerComponent;
  let fixture: ComponentFixture<OrdersControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
