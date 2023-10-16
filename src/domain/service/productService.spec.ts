import { randomUUID } from 'crypto';
import { Product } from '../entities/Product';
import { ProductService } from './productService';

describe('Product Service', () => {
  it('Deve mudar os preços de todos os produtos ', () => {
    const product1 = new Product(randomUUID(), 'Product 1', 25);
    const product2 = new Product(randomUUID(), 'Product 2', 10);
    const products = [product1, product2];

    ProductService.increasePrice(products, 100);

    expect(product1.price).toBe(50);
    expect(product2.price).toBe(20);
  });
});
