import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import poke1 from '../../assets/generations/generation1/001.png';

import './poke-card.css';


export default function PokeCard() {
  return(
    <div className="poke-card" style={{'background': `var(--type-bg-grass)`}}>
      <div className="poke-card-container">
        <svg className='poke-card-pat6'>
          <use xlinkHref='#pat-6'></use>
        </svg>
        <svg className='poke-card-pokeball'>
          <use xlinkHref='#pat-pokeball'></use>
        </svg>
      </div>
      <div className="poke-number">#001</div>
      <div className="poke-name">Bullbasaur</div>
      <div className="poke-labels">
        <Button label="grass"/>
        <Button label="poison"/>
      </div>
      <img className="poke-img" src={poke1} />
    </div>
  );
}