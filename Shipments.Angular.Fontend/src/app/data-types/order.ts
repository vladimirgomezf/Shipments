import { Customer } from './customer';

export interface Order {
  id?: number | null;
  customerId?: Customer;
  date?: Date;
}
