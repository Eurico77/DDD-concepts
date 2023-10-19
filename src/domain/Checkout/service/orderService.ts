import { randomUUID } from 'crypto';
import { Order } from '../entities/Order';
import { OrderItem } from '../entities/OrderItem';
import { Customer } from '../../Customer/entities/Customer';

export class OrderService {
  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (!items.length) throw Error('Order must have at least one item');

    const order = new Order(randomUUID(), customer.getId(), items);
    customer.addRewardPoints(order.total() / 2);
    return order;
  }

  static getTotal(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
}
