import { OrderItem } from './OrderItem';

export class Order {
  constructor(
    private readonly id: string,
    private customerId: string,
    private items: OrderItem[] = []
  ) {}

  total(): number {
    return this.items.reduce((acc, item: OrderItem) => acc + item.price, 0);
  }
}
