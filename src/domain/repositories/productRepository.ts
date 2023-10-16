import { Product } from '../entities/Product';
import { RepositoryInterface } from './repository';

export interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}
