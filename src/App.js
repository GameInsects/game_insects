import React from 'react';
import Game from './comp/Game';


import './App.css';

const App = () => {
  return (
    <div className="App">
  <div className="App-fon-container" style={{
  position: 'relative',
  overflow: 'hidden',
}}>
  <Game />
</div>
</div>
  );
};

export default App;