import { Product } from '../../../domain/entities/Product';
import { ProductRepositoryInterface } from '../../../domain/repositories/productRepository';

export class ProductRepository implements ProductRepositoryInterface {
  private products: Product[] = [];

  async save(entity: Product): Promise<void> {
    this.products.push(entity);
  }

  async update(id: string, entity: Product): Promise<void> {
    const oldProduct = this.products.find((product) => product.getId === id);
    oldProduct.changeName(entity.getName);
  }

  async find(id: string): Promise<Product> {
    return this.products.find((product) => product.getId === id);
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }
}
