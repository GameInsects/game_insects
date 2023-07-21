import Container from '@material-ui/core/Container';
import React, { useState } from 'react';


import InfoBar from './InfoBar';
import BattleField from './BattleField';
const Game = () => {
  const [score, setScore] = useState(0);
  const [isGameStarted, setGameStarted] = useState(false);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <InfoBar
          score={score}
          unSetScore={() => setScore(0)}
          setGameStarted={setGameStarted}
          isGameStarted={isGameStarted}
        />
        <BattleField
          incrementScore={() => setScore(prev => ++prev)}
          isGameStarted={isGameStarted}
        />
      </Container>
    </React.Fragment>
  );
};
export default Game;