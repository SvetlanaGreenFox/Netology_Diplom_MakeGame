import themes from "./themes.js";
import Team from "./Team.js";
import GameState from "./GameState.js";
import GamePlay from "./GamePlay.js";
import { player, enemy } from "./teams";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.team = new Team(player, enemy, this.gamePlay.boardSize);
    this.arrangeTeam = [];
    this.playerTeam = [];
    this.enemyTeam = [];
    this.gameState = new GameState();
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
    this.playerTeam = this.team.makeTeamPlayer();
    this.enemyTeam = this.team.makeTeamEnemy();
    console.log(this.playerTeam);
    this.arrangeTeam = this.team.arrangeCharacters();
  }

  onCellClick(index) {
    // TODO: react to click
    const elem = this.gamePlay.cells[index].children[0];

    if (elem !== undefined) {
      const choice = elem.classList[1];
      console.log(choice);
      console.log(this.playerTeam);
      if (this.playerTeam.find(elem => elem.type === choice)) {
        console.log(this.playerTeam);
        if (this.gameState.selectCell !== undefined) {
          this.gamePlay.deselectCell(this.gameState.selectCell);
        };
        this.gamePlay.selectCell(index);
        this.gameState.selectCell = index;
        console.log(this.gameState);
      }
      else {
        GamePlay.showError('Выбери своего персонажа');
      }
    }
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
    // console.log(index);
  }
}
