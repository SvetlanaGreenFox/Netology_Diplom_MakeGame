import Character from "../Character";

export class Bowman extends Character {
  constructor(name, type = 'bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
};
