function Kennel() {
  this.animals = [];
}

Kennel.prototype.addAnimal = function addAnimal(animal) {
  this.animals.push(animal);
};

Kennel.prototype.findAnimalByType = function findAnimalByType(type) {
  return this.animals.filter(animal => animal.type === type);
};

Kennel.prototype.getBackwardsNames = function getBackwardsNames() {
  return this.animals.map(animal => animal.getBackwardsName());
};

Kennel.prototype.renameAnimal = function renameAnimal(oldName, newName) {
  this.animals.find(animal => animal.name === oldName).rename(newName);
};

module.exports = Kennel;
