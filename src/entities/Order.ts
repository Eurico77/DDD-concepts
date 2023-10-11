import { OrderItem } from './OrderItem';

export class Order {
  constructor(
    private readonly id: string,
    private customerId: string,
    private items: OrderItem[] = []
  ) {
    this.validate();
  }

  validate() {
    if (!this.customerId) throw new Error('CustomerId is required');
    if (!this.id) throw new Error('Id is required');
    if (!this.items.length) throw new Error('Items are required');
  }

  total(): number {
    const result = this.items.reduce(
      (acc, item: OrderItem) => acc + item.price,
      0
    );
    return result;
  }
}
