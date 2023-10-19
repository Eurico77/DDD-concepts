import { randomUUID } from 'crypto';
import { Product } from '../entities/Product';
import { ProductInterface } from '../entities/ProductInterface';
import { ProductB } from '../entities/ProductB';

export class ProductFactory {
  public static create(
    type: string,
    name: string,
    price: number
  ): ProductInterface {
    switch (type) {
      case 'a':
        return new Product(randomUUID(), name, price);
      case 'b':
        return new ProductB(randomUUID(), name, price);
      default:
        throw new Error('Product type not supported');
    }
  }
}
