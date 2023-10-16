export class OrderItem {
  constructor(
    private readonly id: string,
    readonly name: string,
    readonly productId: string,
    readonly quantity: number,
    readonly price: number
  ) {}
}
