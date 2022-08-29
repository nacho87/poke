import HeaderNav from '../HeaderNav/HeaderNav';

import './header.css';


export default function Header() {
  return(
    <header className='poke-header'>
      <div className="poke-header-bg">
        <svg className='poke-header-bg-item'>
          <use xlinkHref='#pat-pokeball'></use>
        </svg>
      </div>
      <HeaderNav/>
      <div className='poke-header-title'>Pokédex</div>
      <div className='poke-header-description'>Search for Pokémon by name or using the National Pokédex number.</div>
    </header>
  )
}