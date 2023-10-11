export class Product {
  constructor(private id: string, private name: string, private price: number) {
    this.validate();
  }

  private validate(): void {
    if (!this.id) throw new Error('Id is required');
    if (!this.name) throw new Error('Name is required');
    if (!this.price) throw new Error('Price is required');
    if (this.price < 0) throw new Error('Price is not negative');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
