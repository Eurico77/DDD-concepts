import Address from './Address';

export class Customer {
  constructor(
    private readonly id: string,
    private name: string,
    private address: Address,
    private active: boolean = true
  ) {
    this.validate();
  }

  changeName(name: string) {
    this.name = name;
    this.validate();
  }

  activate() {
    if (!this.address) throw new Error('Customer must a ben have Address');
    this.active = true;
  }

  validate() {
    if (!this.name && !this.id) throw new Error('Properties are required');
  }
}
