import './header-nav.css'

export default function HeaderNav() {
  return(
    <div className="poke-header-nav">
      <svg className='poke-header-nav-item'>
        <use xlinkHref='#icon-generation'></use>
      </svg>
      <svg className='poke-header-nav-item'>
        <use xlinkHref='#icon-sort'></use>
      </svg>
      <svg className='poke-header-nav-item'>
        <use xlinkHref='#icon-filter'></use>
      </svg>
    </div>
  )
}