import Address from './Address';
import { Customer } from './Customer';

describe('Customer', () => {
  it('deve criar um customer corretamente', () => {
    const address = new Address('Rua dos bobos', 433, 'numero 0', 'Quixa');
    const customer = new Customer('123', 'Eurico', address);

    expect(customer).toBeDefined();
    expect(customer).toHaveProperty('name');
  });
});
