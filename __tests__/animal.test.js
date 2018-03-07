const Animal = require('../src/animal');

describe('constructor', () => {
  it('sets the name property', () => {
    const animal = new Animal('Joe', jest.fn()); // type parameter is a dummy
    expect(animal.name).toEqual('Joe');
  });

  it('sets the type property', () => {
    const animal = new Animal(jest.fn(), 'Dog'); // name parameter is a dummy
    expect(animal.type).toEqual('Dog');
  });
});

describe('getBackwardsName', () => {
  it('returns the reversed name', () => {
    const animal = new Animal('Sam', jest.fn()); // type parameter is a dummy
    expect(animal.getBackwardsName()).toEqual('maS');
  });
});

describe('rename', () => {
  it('sets a new name', () => {
    const animal = new Animal(jest.fn(), jest.fn()); // both parameters are dummies
    animal.rename('Billy')
    expect(animal.name).toEqual('Billy');
  });
});