export class Address {
  constructor(
    private readonly street: string,
    private readonly number: number,
    private readonly zip: string,
    private readonly city: string
  ) {
    this.validate();
  }

  private validate() {
    if (this.street.length === 0) throw new Error('Street is required');
    if (this.number === 0) throw new Error('Number is required');
    if (this.zip.length === 0) throw new Error('Zip is required');
    if (this.city.length === 0) throw new Error('City is required');
  }

  toString() {
    return `${this.street}, ${this.number}, ${this.zip} ${this.city}`;
  }
}
