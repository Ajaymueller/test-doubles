const Kennel = require('../src/kennel');

// in the bad test examples, we were using an actual instance on Animal in our tests
// this meant that our tests were brittle - any changes to animal would break the kennel tests
// we were also actually testing the animal class indirectly
// following dependency inversion, the way we have designed Kennel means it is not coupled to any single implementation
// instead it interacts with any type object that implements Animal's interface
// we can use mocks to provide a fake implementation of Animal's interface, and test how Kennel interacts with it

describe('constructor', () => {
  it('has an empty animals array', () => {
    const kennel = new Kennel();
    expect(kennel.animals).toEqual([]);
  });
});

describe('addAnimal', () => {
  it('adds the animal to the stored animals', () => {
    const kennel = new Kennel();
    const mockAnimal = jest.fn();
    kennel.addAnimal(mockAnimal); // pass in a mock
    expect(kennel.animals).toEqual([mockAnimal]); // make expectation involving the mock
  });
});

describe('findAnimalByType', () => {
  it('finds animals with the given type', () => {
    const kennel = new Kennel();
    const mockDog = { type: 'Dog' }; // stub type property of the animals
    const mockCat = { type: 'Cat' }; // stub type property of the animals

    kennel.addAnimal(mockDog);
    kennel.addAnimal(mockCat);

    expect(kennel.findAnimalByType('Dog')).toEqual([mockDog]);
  });
});

describe('getBackwardsNames', () => {
  it('gets the backward names of all animals', () => {
    const kennel = new Kennel();

    const mockDog = {
      // stub the getBackwardsName method
      getBackwardsName: jest.fn(() => 'foo'),
    };
    const mockCat = {
      // stub the getBackwardsName method
      getBackwardsName: jest.fn(() => 'bar'),
    };

    kennel.addAnimal(mockDog);
    kennel.addAnimal(mockCat);

    expect(kennel.getBackwardsNames()).toEqual(['foo', 'bar']);
  });
});

describe('renameAnimal', () => {
  it('renames the given animal', () => {
    const kennel = new Kennel();

    const mockDog = {
      name: 'Susan', // stub the name
      rename: jest.fn(), // provide a spy for rename method
    };
    const mockCat = {
      name: 'NotSusan', // stub the name
      rename: jest.fn(), // provide a spy for rename method
    };

    kennel.addAnimal(mockDog);
    kennel.addAnimal(mockCat);

    kennel.renameAnimal('Susan', 'Alan');

    expect(mockDog.rename).toHaveBeenCalledWith('Alan'); // assert that the spy has been called with correct arguments
    expect(mockCat.rename).not.toHaveBeenCalled(); // assert that this spy has not been called
  });
});
