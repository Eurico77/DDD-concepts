class Costumer {
  constructor(
    private _id: string,
    private _name: string,
    private _address: string
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }
}
