export function calcTileType(index, boardSize) {
  if (index === 0) {
    return 'top-left';
  }
  if (index === (boardSize - 1)) {
    return 'top-right';
  }
  if (index > 0 && index < (boardSize - 1)) {
    return 'top';
  }
  if (index === (boardSize ** 2 - boardSize)) {
    return 'bottom-left';
  }
  if (index === (boardSize ** 2 - 1)) {
    return 'bottom-right';
  }
  if (index > (boardSize ** 2 - boardSize) && index < (boardSize ** 2 - 1)) {
    return 'bottom';
  }
  if (index % boardSize === 0) {
    return 'left';
  }
  if (index % boardSize === 7) {
    return 'right';
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function getPlayerCells(size) {
  let cells = [];
  for (let i = 0, j = 1; i < size ** 2;
    i += size, j += size) {
    cells.push(i, j);
  }

  return cells;
}

export function getEnemyCells(size) {
  let cells = [];
  for (let i = size - 1, j = i - 1; i < size ** 2;
    i += size, j += size) {
    cells.push(j, i);
  }

  return cells;
}
