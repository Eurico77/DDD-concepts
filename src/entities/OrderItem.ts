export class OrderItem {
  constructor(
    private readonly id: string,
    private name: string,
    readonly price: number
  ) {}
}
