import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShipmentComponent } from './show-shipment.component';

describe('ShowShipmentComponent', () => {
  let component: ShowShipmentComponent;
  let fixture: ComponentFixture<ShowShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
