import { randomUUID } from 'crypto';
import { Address } from './domain/entities/Address';
import { Customer } from './domain/entities/Customer';
import { Order } from './domain/entities/Order';
import { OrderItem } from './domain/entities/OrderItem';
import { Product } from './domain/entities/Product';
import { ProductRepository } from './infra/repositories/inMemory/productsRepository';

const productRepository = new ProductRepository();

const address = new Address('Rua dos bobos', 433, 'numero 0', 'Quixa');
const customer = new Customer('123', 'Eurico', address);
customer.activate();
const item1 = new OrderItem('1', 'item 1', '2', 25, 100);
const item2 = new OrderItem('1', 'item 2', '3', 25, 100);
const item3 = new OrderItem('1', 'item 3', '4', 20, 100);
const order = new Order('id', '123', [item1, item2, item3]);

const product1 = new Product(randomUUID(), 'Caderno', 30);

productRepository.save(product1);

const products = productRepository.findAll();
console.log(products);
