const Kennel = require('../src/kennel');

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
