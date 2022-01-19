import { generateTeam } from "./generators";
import PositionedCharacter from "./PositionedCharacter";
import { getPlayerCells, getEnemyCells } from "./utils";



export default class Team {
  constructor(player, enemy, boardSize, level = 1) {
    this.charactersPlayer = player;
    this.charactersEnemy = enemy;
    this.boardSize = boardSize;
    this.playerTeam = [];
    this.enemyTeam = [];
    this.level = level;
  }

  makeTeamPlayer() {
    this.playerTeam = generateTeam(this.charactersPlayer, this.level, 2);
  }

  makeTeamEnemy() {
    this.enemyTeam = generateTeam(this.charactersEnemy, this.level, 2);
  }

  arrangePlayers() {
    const playerColumns = getPlayerCells(this.boardSize);

    const playersPositions = this.playerTeam.map(function (elem) {
      const indexCell = Math.floor(Math.random() * (playerColumns.length - 1));

      return new PositionedCharacter(elem, playerColumns[indexCell]);
    });

    return playersPositions;
  };

  arrangeEnemies() {
    const enemyColumns = getEnemyCells(this.boardSize);

    const enemysPositions = this.enemyTeam.map(function (elem) {
      const indexCell = Math.floor(Math.random() * (enemyColumns.length - 1));
      return new PositionedCharacter(elem, enemyColumns[indexCell]);
    });

    return enemysPositions;
  }

  arrangeCharacters() {
    const arrangeCharacters = [];
    const players = this.arrangePlayers();
    const enemies = this.arrangeEnemies();

    for (let i = 0; i < players.length; i += 1) {
      arrangeCharacters.push(players[i]);
      arrangeCharacters.push(enemies[i]);
    };

    return arrangeCharacters;
  }
}
