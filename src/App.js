import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion';
import ReactionIcons from './components/ReactionIcons';

function App() {
  const [hover, setHover] = useState(false);

  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  return (
    <div className="App">
      <div className="likeBtnholder" onMouseOver = {() => setHover(true)} onMouseOut = {() => setHover(false)}>
        <button className="btn btn-light">Like</button>
        <ReactionIcons initial = "hidden" variants = {list} hover = {hover}/>
      </div>
    </div>
  );
}

export default App;
