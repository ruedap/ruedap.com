import React from 'react';
import Square from './Square';

interface Props {
  squares: (string | null)[];
  onClick: (i: number) => void;
  causedWinCells: number[];
}

const Board: React.FC<Props> = (props) => {
  const renderSquare = (i: number, causedWin: boolean) => {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        causedWin={causedWin}
      />
    );
  };

  const cols = [0, 1, 2];
  const rows = [0, 1, 2];

  return (
    <React.Fragment>
      {rows.map((row) => {
        return (
          <div key={row} className="board-row">
            {cols.map((col) => {
              const cell = row * 3 + col;
              const causedWin = props.causedWinCells.includes(cell);

              return renderSquare(cell, causedWin);
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Board;
