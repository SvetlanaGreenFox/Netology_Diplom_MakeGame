import Character from "./Character";

export class Bowman extends Character {
  constructor(name, type = 'bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
};

export class Daemon extends Character {
  constructor(name, type = 'daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
};

export class Magician extends Character {
  constructor(name, type = 'magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
};

export class Swordsman extends Character {
  constructor(name, type = 'swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
};

export class Undead extends Character {
  constructor(name, type = 'undead') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
};

export class Vampire extends Character {
  constructor(name, type = 'vampire') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
};
