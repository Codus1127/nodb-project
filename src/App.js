import React from 'react';
import './App.css';
import History from './Components/History'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <img className="eightBall" alt="" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png"/>
      {/* <img className="fog" alt="" src="http://www.pngnames.com/files/4/Fog-PNG-Photo.png"/> */}
      <History/>
      
      
    </div>
  );
}

export default App;
