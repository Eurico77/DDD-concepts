import { Address } from '../../Customer/entities/Address';
import { Customer } from '../../Customer/entities/Customer';
import { Order } from '../entities/Order';
import { OrderItem } from '../entities/OrderItem';
import { OrderService } from './orderService';

describe('OrderService', () => {
  it('Deve fazer um novo pedido', () => {
    const address = new Address('Rua dos bobos', 433, 'numero 0', 'Quixa');
    const customer = new Customer('123', 'Eurico', address);
    const item1 = new OrderItem('1', 'item 1', '2', 2, 10);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.getRewardPoints).toBe(10);
    expect(order.total()).toBe(20);
  });

  it('deve pegar o total de todos os pedidos', () => {
    const item1 = new OrderItem('1', 'item 1', '2', 2, 10);
    const item2 = new OrderItem('1', 'item 2', '3', 5, 25);
    const item3 = new OrderItem('1', 'item 3', '4', 10, 15);
    const order1 = new Order('123', '123', [item1, item2]);
    const order2 = new Order('321', '321', [item3, item2]);

    const total = OrderService.getTotal([order1, order2]);

    expect(total).toBe(420);
  });
});
