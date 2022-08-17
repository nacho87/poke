import PropTypes from 'prop-types';
import './button-size.css';

export default function ButtonSize({type, active}) {
  return(
    <div className='filter-label' style={{'--color-enable': `${active ? `var(--size-${type})` : '' }`}}>
      <svg className='filter-svg' style={{'--color-disable': `${!active ? `var(--size-${type})` : ''}`}}>
        <use xlinkHref={`#size-${type}`}></use>
      </svg>
    </div>
  )
}

ButtonSize.propTypes = {
  type: PropTypes.oneOf([
    "medium",
    "short",
    "tall",
    "heavy",
    "light",
    "normal"
  ]),
};

ButtonSize.defaultProps = {
  type: 'medium',
  active: true
};