import React, { useState } from 'react';

import Board from './Board';
import './App.scss';

type Squares = (string | null)[];

interface History {
  squares: Squares;
  position: {
    col: number;
    row: number;
  };
  player: string | null;
}

const calculateWinner = (squares: Squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        causedWinCells: lines[i],
      };
    }
  }

  return {
    winner: null,
    causedWinCells: [],
  };
};

const App: React.FC = () => {
  const [history, setHistory] = useState<History[]>([
    { squares: Array(9).fill(null), position: { col: 0, row: 0 }, player: '' },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);

  const handleClick = (i: number) => {
    const historyCurrent = history.slice(0, stepNumber + 1);
    const current = historyCurrent[historyCurrent.length - 1];
    const squares = [...current.squares];

    const winInfo = calculateWinner(squares);
    if (winInfo.winner || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';

    const col = (i % 3) + 1;
    const row = Math.trunc(i / 3) + 1;
    const position = { col, row };
    const player = squares[i];

    setHistory([...historyCurrent, { squares, position, player }]);
    setStepNumber(historyCurrent.length);
    setXIsNext(!xIsNext);
  };

  const reverseHistoryOrder = () => {
    setIsAscendingOrder(!isAscendingOrder);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const historyCurrent = isAscendingOrder
    ? history.slice()
    : history.slice().reverse();

  const currentStepNumber = isAscendingOrder
    ? stepNumber
    : historyCurrent.length - 1 - stepNumber;

  const current = historyCurrent[currentStepNumber];
  const winInfo = calculateWinner(current.squares);

  const moves = historyCurrent.map((step, move) => {
    const moveIndex = isAscendingOrder
      ? move
      : historyCurrent.length - 1 - move;
    const desc = moveIndex
      ? `Go to move #${moveIndex} (${step.player} ${step.position.row},${step.position.col})`
      : 'Go to game start';

    return (
      <li key={moveIndex}>
        <button
          className={move === currentStepNumber ? 'bold' : 'normal'}
          onClick={() => jumpTo(moveIndex)}>
          {desc}
        </button>
      </li>
    );
  });

  const status = winInfo.winner
    ? `Winner: ${winInfo.winner}`
    : !current.squares.includes(null)
    ? 'Draw'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="app">
      <div>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          causedWinCells={winInfo.causedWinCells}
        />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
        <button onClick={() => reverseHistoryOrder()}>
          Reverse history order
        </button>
      </div>
    </div>
  );
};

export default App;
