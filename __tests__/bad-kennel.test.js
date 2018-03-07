const Animal = require('../src/animal');
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
    const animal = new Animal('Fred', 'Dog');
    kennel.addAnimal(animal);
    expect(kennel.animals).toEqual([animal]);
  });
});

describe('findAnimalByType', () => {
  it('finds animals with the given type', () => {
    const kennel = new Kennel();
    const dog = new Animal('Fred', 'Dog');
    const cat = new Animal('Susan', 'Cat');

    kennel.addAnimal(dog);
    kennel.addAnimal(cat);

    expect(kennel.findAnimalByType('Dog')).toEqual([dog]);
  });
});

describe('getBackwardsNames', () => {
  it('gets the backward names of all animals', () => {
    const kennel = new Kennel();

    const dog = new Animal('Fred', 'Dog');
    const cat = new Animal('Susan', 'Cat');

    kennel.addAnimal(dog);
    kennel.addAnimal(cat);

    expect(kennel.getBackwardsNames()).toEqual(['derF', 'nasuS']);
  });
});

describe('renameAnimal', () => {
  it('renames the given animal', () => {
    const kennel = new Kennel();

    const dog = new Animal('Fred', 'Dog');
    const cat = new Animal('Susan', 'Cat');

    kennel.addAnimal(dog);
    kennel.addAnimal(cat);

    kennel.renameAnimal('Susan', 'Alan');

    expect(cat.name).toEqual('Alan');
  });
});
