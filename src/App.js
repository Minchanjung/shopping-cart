import React, { useState } from 'react';
import keyboards from './data/keyboards';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import grid1 from './imgs/grid1.webp';
import grid2 from './imgs/grid2.webp';
import grid3 from './imgs/grid3.webp';
import grid4 from './imgs/grid4.webp';
import grid5 from './imgs/grid5.webp';
import grid6 from './imgs/grid6.webp';

const App = (props) => {
  return (
    <div>
      <Header />

      <div id="backgroundImg">
        <h1 id="description">Keychron K3 Wireless Mechanical Keyboard</h1>
        <div id="orderNowBtnContainer">
          <div id="btnDescription">Low Profile | 75% Layout | Hot-Swappable</div>
          <button id="orderNowBtn"><span>Order Now</span></button>
        </div>
      </div>

      <div id="productGrid">
        <div className='productItem'>
          <img src={grid1} alt='img' className='homeGridImg'></img>
          <div className='homeGridDescription'>Custom Keyboards</div>
        </div>
        <div className='productItem'>
          <img src={grid2} alt='img' className='homeGridImg'></img>
          <div className='homeGridDescription'>Normal Keyboards</div>
        </div>
        <div className='productItem'>
          <img src={grid3} alt='img' className='homeGridImg'></img>
          <div className='homeGridDescription'>Low Profile Keyboards</div>
        </div>
        <div className='productItem'>
          <img src={grid4} alt='img' className='homeGridImg'></img>
          <div className='homeGridDescription'>Mice</div>
        </div><div className='productItem'>
          <img src={grid5} alt='img' className='homeGridImg'></img>
          <div className='homeGridDescription'>ISO/JIS Layout Keyboards</div>
        </div>
        <div className='productItem'>
          <img src={grid6} alt='img' className='homeGridImg'></img>
          <div className='homeGridDescription'>Switches</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App;
