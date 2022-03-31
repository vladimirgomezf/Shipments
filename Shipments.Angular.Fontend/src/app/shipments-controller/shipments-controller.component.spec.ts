import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsControllerComponent } from './shipments-controller.component';

describe('ShipmentsControllerComponent', () => {
  let component: ShipmentsControllerComponent;
  let fixture: ComponentFixture<ShipmentsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
