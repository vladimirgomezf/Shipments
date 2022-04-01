import { Order } from './order';

export interface Shipment {
  id?: number | null;
  orderId?: Order;
  date_Start?: Date;
  date_End?: Date;
}
