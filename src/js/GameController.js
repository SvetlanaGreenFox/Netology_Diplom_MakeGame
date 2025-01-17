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

    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));


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
    const elem = this.gamePlay.cells[index].children[0];

    if (elem !== undefined) {
      const { level, attack, defence, health } = this.arrangeTeam[this.arrangeTeam.findIndex(elem => elem.position === index)].character;

      const message = `\uD83C\uDF96${level} \u2694${attack} \uD83D\uDEE1${defence} \u2764${health}`;
      this.gamePlay.showCellTooltip(message, index);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
