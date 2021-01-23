import React from 'react';

interface Props {
  onClick: () => void;
  value: string | null;
  causedWin: boolean;
}

const Square: React.FC<Props> = (props) => {
  return (
    <button
      className={props.causedWin ? 'square caused-win' : 'square'}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
