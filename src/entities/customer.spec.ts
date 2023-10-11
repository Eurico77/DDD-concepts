import Address from './Address';
import { Customer } from './Customer';

describe('Customer', () => {
  it('deve criar um customer corretamente', () => {
    const address = new Address('Rua dos bobos', 433, 'numero 0', 'Quixa');
    const customer = new Customer('123', 'Eurico', address);

    expect(customer).toBeDefined();
    expect(customer).toHaveProperty('name');
  });

  it('deve exibir um erro ao tentar criar um customer sem id', () => {
    const address = new Address('Rua dos bobos', 433, 'numero 0', 'Quixadá');
    expect(() => new Customer('', 'Eurico', address)).toThrowError(
      'Id is required'
    );
  });

  it('deve exibir um erro ao tentar mudar um nome para vazio', () => {
    const address = new Address('Rua dos bobos', 433, 'numero 0', 'Quixa');
    expect(() =>
      new Customer('2', 'Eurico', address).changeName('')
    ).toThrowError('Name is required');
  });
});
