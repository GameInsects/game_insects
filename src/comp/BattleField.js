import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';

import { useStyles } from './Styles';
import { Bug } from './Bug';
const GAME_OVER = 'Game Over';
const CLICK_START = 'Please Click Start';
const showRandomBug = setBugs => {
  const bugId = Date.now();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const bugX = Math.random() * screenWidth;
  const bugY = Math.random() * screenHeight;
  setBugs(prevBugs => [
    ...prevBugs,
    { id: bugId, isVisible: true, x: bugX, y: bugY },
  ]);
};
const BattleField = ({ incrementScore, isGameStarted }) => {
  const [bugs, setBugs] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    let bugInterval;
    if (isGameStarted) {
      setIsGameOver(false);
      bugInterval = setInterval(() => {
        showRandomBug(setBugs);
      }, 2000);
    } else {
      if (bugs.length > 0) {
        setIsGameOver(true);
      }
      setBugs([]);
    }
    return () => {
      clearInterval(bugInterval);
    };
  }, [isGameStarted]);

  const handleBugStop = bugId => {
    setBugs(prevBugs =>
      prevBugs.map(bug =>
        bug.id === bugId ? { ...bug, isVisible: false } : bug,
      ),
    );
  };

  return (
    <div className={classes.paper}>
      <Paper elevation={6}>
        {isGameStarted ? (
          bugs
            .filter(bug => bug.isVisible)
            .map(bug => (
              <Bug
                key={bug.id}
                onStop={() => handleBugStop(bug.id)}
                onIncrementScore={() => incrementScore()}
                x={bug.x}
                y={bug.y}
              />
            ))
        ) : (
          <Typography variant="h1" className={classes.gameOver}>
            {isGameOver ? GAME_OVER : CLICK_START}
          </Typography>
        )}
      </Paper>
    </div>
  );
};
export default BattleField;