/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  for (let i = 0; i < allowedTypes.length; i += 1) {
    const indexCharacter = Math.floor(Math.random() * (allowedTypes.length - 1));
    const indexLevel = Math.floor(Math.random() * maxLevel + 1);
    const character = allowedTypes[indexCharacter];
    character.level = indexLevel;

    yield character;
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];
  const character = characterGenerator(allowedTypes, maxLevel);
  let val = character.next().value;

  for (let i = 0; i < characterCount; i += 1) {
    val = character.next().value;

    team.push(val);
  };

  return team;
}
