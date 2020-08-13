import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion';
import like from './assets/like.svg';
import love from './assets/love.svg';
import laugh from './assets/laughing.svg';
import wow from './assets/soaked.svg';
import sad from './assets/sad.svg';
import angry from './assets/angry.svg';
import likeicon from './assets/likeicon.png';

import ReactionIcons from './components/ReactionIcons';
import Icon from './components/Icons';

function App() {
  const [hover, setHover] = useState(false);

  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.04,
      },
    }
  }

  return (
    <div className="App">
      <div className="likeBtnholder" onMouseOver = {() => setHover(true)} onMouseOut = {() => setHover(false)}>
        <button className="btn btn-light"><img src={likeicon} width="20" height="20" alt=""/>&nbsp;Like</button>
        <ReactionIcons initial = "hidden" variants = {list} hover = {hover}>
          <Icon icon = {like} />
          <Icon icon = {love} />
          <Icon icon = {laugh} />
          <Icon icon = {wow} />
          <Icon icon = {sad} />
          <Icon icon = {angry} />
        </ReactionIcons>
        
      </div>
    </div>
  );
}

export default App;
