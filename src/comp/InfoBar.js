
import { Tab, Tabs } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import  useCountdown from '../hooks/useCountdown';
import formatTime from '../mappers/formatTime';
import { useStyles } from './Styles';

const START = 'Start';
const RESTART = 'Restart';
const TIMER_TEXT = 'Timer playing:';
const SCORE = 'Score';
const initialTime = 60 * 1000;
function a11yProps(index) {
  return {
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  };
}
const InfoBar = ({
  setGameStarted,
  isGameStarted,
  score,
  unSetScore,
}) => {
  const [timeRemaining, setTimeRemaining] = useCountdown({
    isCountdownStart: isGameStarted,
    setIsCountdownStart: setGameStarted,
  });

  const classes = useStyles();

  const handleChange = () => {
    setTimeRemaining(initialTime);
    setGameStarted(true);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Tabs
            value={0}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label={START} {...a11yProps(0)} />
            {isGameStarted && (
              <Tab
                label={RESTART}
                onClick={() => {
                  setTimeRemaining(initialTime);
                  unSetScore();
                  setGameStarted(true);
                }}
              />
            )}
          </Tabs>
          {isGameStarted && (
            <>
              <Typography variant="body1" className={classes.title}>
                {`${TIMER_TEXT} ${formatTime(timeRemaining)}`}
              </Typography>
              <Typography variant="body1" className={classes.title}>
                {`${SCORE}: ${score}`}
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default InfoBar;