import { helper } from '@ember/component/helper';

export default helper(function groupByPosition([seats, pos]) {
  let filtered = seats.filter(seat => seat.pos === pos);

  let maxRow = Math.max(...filtered.map(s => s.rowNumber));
  let maxCol = Math.max(...filtered.map(s => s.columnNumber));
  
  let grid = [];

  for (let row = 1; row <= maxRow; row++) {
    let rowSeats = [];

    for (let col = 1; col <= maxCol; col++) {
      let seat = filtered.find(s => s.rowNumber === row && s.columnNumber === col);
      rowSeats.push(seat || null);
    }
    grid.push(rowSeats.filter(Boolean));
  }
  return grid;
});
