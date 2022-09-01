import { useEffect, useState } from 'react';

import './css/base.css'
import SvgSprites from './components/SvgSprites'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import PokeCard from './components/PokeCard/PokeCard'


function App() {
  const [data, setData] = useState([]);

  let next;

 
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => {
        next = data.next;
        setData(data.results)
      });
  },[])

  function obCallback(payload) {
    console.log('nacho', payload[0].intersectionRatio);
    if (payload[0].intersectionRatio > 0) {
      console.log('next', next)
      fetch(next)
        .then(response => response.json())
        .then(newData => {
          next = newData.next;
          const localData = newData.results;
          const newArrayData = localData.map(item => data.push(item))
          console.log('newArrayData', newArrayData)
          setData(data.concat(localData))
        });
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
