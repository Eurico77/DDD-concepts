import { randomUUID } from 'crypto';
import { Product } from './Product';

describe('Product', () => {
  it('Deve criar um produto corretamente', () => {
    const product = new Product(randomUUID(), 'Product 1', 25);

    expect(product).toBeDefined();
    expect(product).toHaveProperty('id');
  });

  it('Deve dar erro ao tentar criar um produto sem nome', () => {
    expect(() => new Product(randomUUID(), '', 25)).toThrowError(
      'Name is required'
    );
  });

  it('Deve dar erro ao tentar criar um produto com preço negativo', () => {
    expect(() => new Product(randomUUID(), 'product', -22)).toThrowError(
      'Price is not negative'
    );
  });

  it('Deve  modificar o nome', () => {
    const product = new Product(randomUUID(), 'Product 1', 25);
    product.changeName('new product');

    expect(product['name']).toBe('new product');
  });
});
