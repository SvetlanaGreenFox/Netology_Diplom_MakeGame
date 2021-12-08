export default class Team {
  constructor() {
    this.members = new Set();
  }

  add({ type }) {
    if (this.members.has(type)) {
      throw new Error('Выберите другого игрока!');
    }
    this.members.add(type);
  }

  addAll(...characters) {
    characters.map((type) => this.members.add(type.type));
  }

  toArray() {
    const array = [...this.members];
    return array;
  }
}
