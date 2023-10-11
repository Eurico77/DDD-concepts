import Address from './entities/Address';
import { Customer } from './entities/Customer';
import { Order } from './entities/Order';
import { OrderItem } from './entities/OrderItem';

const address = new Address('Rua dos bobos', 433, 'numero 0', 'Quixa');
const customer = new Customer('123', 'Eurico', address);
customer.activate();

const item1 = new OrderItem('1', 'item 1', 10);
const item2 = new OrderItem('1', 'item 2', 25);
const item3 = new OrderItem('1', 'item 3', 15);

const order = new Order('id', '123', [item1, item2, item3]);

console.log(order.total());
