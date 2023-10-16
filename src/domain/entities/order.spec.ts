import { Order } from './Order';
import { OrderItem } from './OrderItem';

describe('Order', () => {
  it('Deve criar um order com o parâmetros corretos', () => {
    const item1 = new OrderItem('1', 'item 1', '2', 2, 10);
    const item2 = new OrderItem('1', 'item 2', '3', 5, 25);
    const item3 = new OrderItem('1', 'item 3', '4', 10, 15);
    const order = new Order('id', '123', [item1, item2, item3]);

    expect(order).toBeDefined();
    expect(order).toHaveProperty('id');
    expect(order.total()).toBe(295);
  });

  it('Deve lançar um erro ao criar um order com o parâmetros incorretos', () => {
    const item1 = new OrderItem('1', 'item 1', '2', 2, 10);
    const item2 = new OrderItem('1', 'item 2', '3', 5, 25);
    const item3 = new OrderItem('1', 'item 3', '4', 10, 15);

    expect(() => new Order('', '222', [item1, item2, item3])).toThrowError(
      'Id is required'
    );
  });

  it('Deve lançar um erro ao criar um order com sem items', () => {
    expect(() => new Order('123', '222', [])).toThrowError(
      'Items are required'
    );
  });
});
