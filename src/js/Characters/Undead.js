import Character from "../Character";

export class Undead extends Character {
  constructor(name, type = 'undead') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
};
