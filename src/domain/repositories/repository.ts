export interface RepositoryInterface<T> {
  save(entity: T): Promise<void>;
  update(id: string, entity: T): Promise<void>;
  find(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}
