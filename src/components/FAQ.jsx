import React from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

import { northwesternPurple } from '../misc/AppColors';

const style = {
  background: {
    padding: '50px'
  },
  title: {
    color: northwesternPurple
  },
  question: {
    marginTop: '40px'
  }
};

const FAQ = () => (
  <div style={style.background}>
    <h1 style={style.title}>Frequently Asked Questions</h1>

    <Divider />

    <div style={style.question}>
      <h3>Pergunta 1?</h3>
      <p>
        <Link to="/about">We're glad you asked...</Link>
      </p>
    </div>

    <div style={style.question}>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum 
      </p>
    </div>

    <div style={style.question}>
      <h3>I'm a developer. I'd like to contribute.</h3>
      <p>
        Wonderful! <Link to="/contact">Send us a message</Link> and
        <a href="https://github.com/ricardodemauro/transp"> check out our repository.</a>
      </p>
    </div>
    
  </div>
);

export default FAQ;
