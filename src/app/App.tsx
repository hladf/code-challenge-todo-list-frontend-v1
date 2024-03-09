import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello Code Challenge!</h1>
      {process.env.REACT_APP_BASE_URL}
    </div>
  );
}

export default App;
