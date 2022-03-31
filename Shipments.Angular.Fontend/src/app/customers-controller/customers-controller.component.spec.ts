import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersControllerComponent } from './customers-controller.component';

describe('CustomersControllerComponent', () => {
  let component: CustomersControllerComponent;
  let fixture: ComponentFixture<CustomersControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
