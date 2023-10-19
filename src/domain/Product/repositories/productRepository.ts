import { RepositoryInterface } from '../../shared/repositories/repository';
import { Product } from '../entities/Product';

export interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}
