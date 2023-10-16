import { Address } from './Address';

export class Customer {
  constructor(
    private readonly id: string,
    private name: string,
    private address: Address,
    private active: boolean = true,
    private rewardPoints: number = 0
  ) {
    this.validate();
  }

  changeName(name: string) {
    this.name = name;
    this.validate();
  }

  getId() {
    return this.id;
  }

  addRewardPoints(points: number) {
    this.rewardPoints = points;
  }

  get getRewardPoints(): number {
    return this.rewardPoints;
  }

  activate() {
    if (!this.address) throw new Error('Customer must a ben have Address');
    this.active = true;
  }

  validate() {
    if (!this.name) throw new Error('Name is required');
    if (!this.id) throw new Error('Id is required');
  }
}
