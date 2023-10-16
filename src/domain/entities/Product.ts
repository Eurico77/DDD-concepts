export class Product {
  constructor(
    private id: string,
    private name: string,
    private _price: number
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

  get getName() {
    return this.name;
  }

  get getId() {
    return this.id;
  }

  get price() {
    return this._price;
  }

  changePrice(price: number): void {
    this._price = price;
  }
}
