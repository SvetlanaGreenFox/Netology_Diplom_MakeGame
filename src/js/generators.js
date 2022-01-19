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
  const character = allowedTypes[indexCharacter];
  const indexLevel = Math.floor(Math.random() * maxLevel + 1);
  character.level = indexLevel;

  yield character;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];

  for (let i = 0; i < characterCount; i += 1) {
    const character = characterGenerator(allowedTypes, maxLevel);
    team.push(character.next().value);
  }

  return team;
}
