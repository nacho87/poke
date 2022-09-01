import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import poke1 from '../../assets/generations/generation1/001.png';

import './poke-card.css';


export default function PokeCard({name, url}) {
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
  },[])

  if (data.name) {
    return(
      <div className="poke-card" style={{'background': `var(--type-bg-${data.types[0].type.name})`}}>
        <div className="poke-card-container">
          <svg className='poke-card-pat6'>
            <use xlinkHref='#pat-6'></use>
          </svg>
          <svg className='poke-card-pokeball'>
            <use xlinkHref='#pat-pokeball'></use>
          </svg>
        </div>
        <div className="poke-number">#{data.order.toString().padStart(3, '0')}</div>
        <div className="poke-name">{name}</div>
        <div className="poke-labels">
          {
            data.types.map(value => <Button key={value.type.name} label={value.type.name}/>)
          }
        </div>
        <img className="poke-img" src={data?.sprites?.front_default} alt={name}/>
      </div>
    );
  }

  
}