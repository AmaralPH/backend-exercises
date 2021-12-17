import React from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <div className="App">
      {/* <script src="/socket.io/socket.io.js"></script> */}
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;