import './search.css';

export default function Search() {
  return(
    <form className='poke-search-form'>
      <svg className='poke-search-svg'>
        <use xlinkHref='#icon-search'></use>
      </svg>
      <input className='poke-search-input' type="text" placeholder='What Pokémon are you looking for?' />
    </form>
  )
}
