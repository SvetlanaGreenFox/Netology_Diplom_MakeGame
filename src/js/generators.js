/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */


export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const indexCharacter = Math.floor(Math.random() * (allowedTypes.length - 1));
  const indexLevel = Math.floor(Math.random() * maxLevel);

  yield new allowedTypes[indexCharacter](indexLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  const character = characterGenerator(allowedTypes, maxLevel);

  for (let i = 0; i < characterCount; i += 1) {
    team.push(character.next().value);
  }

  return team;
}
