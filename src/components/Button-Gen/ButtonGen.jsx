import PropTypes from 'prop-types';
import './button-gen.css';

import poke1 from '../../assets/generations/generation1/001.png';
import poke4 from '../../assets/generations/generation1/004.png';
import poke7 from '../../assets/generations/generation1/007.png';
import poke152 from '../../assets/generations/generation2/152.png';
import poke155 from '../../assets/generations/generation2/155.png';
import poke158 from '../../assets/generations/generation2/158.png';
import poke252 from '../../assets/generations/generation3/252.png';
import poke255 from '../../assets/generations/generation3/255.png';
import poke258 from '../../assets/generations/generation3/258.png';
import poke387 from '../../assets/generations/generation4/387.png';
import poke390 from '../../assets/generations/generation4/390.png';
import poke393 from '../../assets/generations/generation4/393.png';
import poke495 from '../../assets/generations/generation5/495.png';
import poke498 from '../../assets/generations/generation5/498.png';
import poke501 from '../../assets/generations/generation5/501.png';
import poke650 from '../../assets/generations/generation6/650.png';
import poke653 from '../../assets/generations/generation6/653.png';
import poke656 from '../../assets/generations/generation6/656.png';
import poke722 from '../../assets/generations/generation7/722.png';
import poke725 from '../../assets/generations/generation7/725.png';
import poke728 from '../../assets/generations/generation7/728.png';
import poke810 from '../../assets/generations/generation8/810.png';
import poke813 from '../../assets/generations/generation8/813.png';
import poke816 from '../../assets/generations/generation8/816.png';

const generations = {
  genI: [poke1, poke4, poke7],
  genII: [poke152, poke155, poke158],
  genIII: [poke252, poke255, poke258],
  genIV: [poke387, poke390, poke393],
  genV: [poke495, poke498, poke501],
  genVI: [poke650, poke653, poke656],
  genVII: [poke722, poke725, poke728],
  genVIII: [poke810, poke813, poke816]
}

export default function ButtonGen({type, active}) {
  return(
    <div className={`button-gen${active ? ' button-gen--active' : ''}`}>
      <svg className='button-gen-pat6'>
        <use xlinkHref='#pat-6'></use>
      </svg>
      <svg className='button-gen-pokeball'>
        <use xlinkHref='#pat-pokeball'></use>
      </svg>
      <div className="button-gen-container">
        {
          generations[`gen${type}`].map(item => {
            return(<img className='button-gen-img' src={item} alt="" />)
          })
        }
        Generation {type}
      </div>
    </div>
    // <div className='filter-label' style={{'--color-enable': `${active ? `var(--type-${type})` : '' }`}}>
    //   <svg className='filter-svg' style={{'--color-disable': `${!active ? `var(--type-${type})` : ''}`}}>
    //     <use xlinkHref={`#${type}`}></use>
    //   </svg>
    // </div>
  )
}

ButtonGen.propTypes = {
  type: PropTypes.oneOf(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']),
};

ButtonGen.defaultProps = {
  type: 'I',
  active: true
};
