import { useEffect, useState } from 'react';

import './css/base.css'
import SvgSprites from './components/SvgSprites'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import PokeCard from './components/PokeCard/PokeCard'


function App() {
  const [data, setData] = useState([]);
  const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon/');

  function getData() {
    fetch(next)
      .then(response => response.json())
      .then(poke => {
        setNext(poke.next);
        setData([...data, ...poke.results])
      });
  }
 
  useEffect(() => {
    getData()
  },[])

  function obCallback(payload) {
    console.log('nacho', payload[0].intersectionRatio);
    if (payload[0].intersectionRatio > 0) {
      console.log('next', next)
      getData()
    }
  }

  useEffect(() => {

    const watch = document.querySelector('.loadMore');
    const ob = new IntersectionObserver(obCallback, watch);
    ob.observe(watch);
  })

  return (
    <div className="App">
      <SvgSprites/>
      <Header/>
      <Search/>
      { 
        data?.length > 0 && data?.map(item => {
          return <PokeCard key={item.name} name={item.name} url={item.url}/>
        })
      }
      <div className='loadMore'>LoadMore</div>
    </div>
  );
}

export default App;
