import React, {useEffect, useState, useRef} from 'react';
import logo from './img/super-shoes.png';
import scrool from './img/216151_right_chevron_icon.png';
import './App.css';

function App() {

  const[data, setData] = useState([]);
  const carrossel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then(response => response.json())
      .then(setData)
  }, [])

  const handleLeftScroll = (event) => {

    event.preventDefault()
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth

  }

  const handleRightScroll = (event) => {

    event.preventDefault()
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft += carrossel.current.offsetWidth
    
  }

  if (!data || !data.length) return null;


  return (
    <div className='container'>
    <div className='logo' >
  <img src={logo} alt='Logo da Super Shoes (loja fictícia)'/>
    </div>
    <div className='carrossel' ref={carrossel}>
      {data.map( item => {
        const {id, name, price, oldPrice, image} = item
        return(
          <div className='item' key={id}>
            <div className='divImage'>
              <img src={image} alt={name}/>
            </div>
            <div className='information'>
              <span className='nameOfProduct'> {name} </span>
              <span className='oldPrice'> R$: {oldPrice} </span>
              <span className='salePrice'> R$: {price} </span>
            </div>
          </div>
        )
      })}
    </div>
    <div className='ScroolButtons'>
      <button onClick={handleLeftScroll}><img src={scrool} alt='Scrool Left'/></button>
      <button onClick={handleRightScroll}><img src={scrool} alt='Scrool Right'/></button>
    </div>

    <footer>
      <p> Esta página não faz venda de produtos </p>
      <p> Projeto criado para fins didáticos </p>
      <p> Todos os direitos reservados © <span>santosak1999@gmail.com</span> </p>
    </footer>
  </div>
  );
}

export default App;
