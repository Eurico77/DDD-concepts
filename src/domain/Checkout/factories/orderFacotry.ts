import { Order } from '../entities/Order';
import { OrderItem } from '../entities/OrderItem';

interface OrderFactoryProps {
  id: string;
  customerId: string;
  items: {
    id: string;
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[];
}

export class OrderFactory {
  public static create(props: OrderFactoryProps): Order {
    const items = props.items.map((item) => {
      return new OrderItem(
        item.id,
        item.name,
        item.productId,
        item.price,
        item.quantity
      );
    });

    return new Order(props.id, props.customerId, items);
  }
}
