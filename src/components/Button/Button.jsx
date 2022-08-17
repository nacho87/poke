import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


export default function Button({label}) {
  return(
    <div className='label' style={{'background': `var(--type-${label})`}}>
      <svg className='label-svg'>
        <use xlinkHref={`#${label}`}></use>
      </svg>
      {label}
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.oneOf([
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water"
  ]),
};

Button.defaultProps = {
  label: 'bug'
};
