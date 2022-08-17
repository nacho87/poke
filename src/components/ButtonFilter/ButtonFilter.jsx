import PropTypes from 'prop-types';
import './button-filter.css';

export default function ButtonFilter({type, active}) {
  return(
    <div className='filter-label' style={{'--color-enable': `${active ? `var(--type-${type})` : '' }`}}>
      <svg className='filter-svg' style={{'--color-disable': `${!active ? `var(--type-${type})` : ''}`}}>
        <use xlinkHref={`#${type}`}></use>
      </svg>
    </div>
  )
}

ButtonFilter.propTypes = {
  type: PropTypes.oneOf([
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

ButtonFilter.defaultProps = {
  type: 'bug',
  active: true
};