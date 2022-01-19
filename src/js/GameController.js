import themes from "./themes.js";
import Team from "./Team.js";
import { player, enemy } from "./teams";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.team = new Team(player, enemy, this.gamePlay.boardSize);
    this.arrangeTeam = [];
    this.playerTeam = [];
    this.enemyTeam = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.initTeams();

    this.gamePlay.drawUi(themes['prairie']);
    this.gamePlay.redrawPositions(this.arrangeTeam);
  }

  initTeams() {

    this.team.makeTeamPlayer();
    this.team.makeTeamEnemy();

    this.arrangeTeam = this.team.arrangeCharacters();
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
