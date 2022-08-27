import './header.css';

export default function Header() {
  return(
    <header className='poke-header'>
      <div className='poke-header-title'>Pokédex</div>
      <div className='poke-header-description'>Search for Pokémon by name or using the National Pokédex number.</div>
    </header>
  )
}