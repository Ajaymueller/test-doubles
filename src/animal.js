function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.getBackwardsName = function getBackwardsName() {
  return this.name.split('').reverse().join('');
};

Animal.prototype.rename = function rename(newName) {
  this.name = newName;
};

module.exports = Animal;
