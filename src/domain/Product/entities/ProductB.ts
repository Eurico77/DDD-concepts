import { ProductInterface } from './ProductInterface';

export class ProductB implements ProductInterface {
  constructor(
    private id: string,
    private name: string,
    private _price: number,
    readonly description: string = 'ProductB'
  ) {
    this.validate();
  }

  private validate(): void {
    if (!this.id) throw new Error('Id is required');
    if (!this.name) throw new Error('Name is required');
    if (!this._price) throw new Error('Price is required');
    if (this._price < 0) throw new Error('Price is not negative');
  }

  changeName(name: string): void {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getPrice() {
    return this._price;
  }

  changePrice(price: number): void {
    this._price = price;
  }
}
