import { OrderItem } from './OrderItem';

export class Order {
  constructor(
    private readonly id: string,
    private customerId: string,
    private items: OrderItem[] = []
  ) {}
}
