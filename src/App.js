import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="App">
      <div className="likeBtnholder">
        <button className="btn btn-light">Like</button>
      </div>
    </div>
  );
}

export default App;
