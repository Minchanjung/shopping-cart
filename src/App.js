import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />

      <div id="backgroundImg">
        <h1>Keychron K3</h1>
        <div>QMK | 80% Layout</div>
        <button>Order Now</button>
      </div>

      <div id="productGrid">
        <div className='productItem'>
          <img src='' alt='img'></img>
          <div>Title</div>
        </div>
        <div className='productItem'>
          <img src='' alt='img'></img>
          <div>Title</div>
        </div>
        <div className='productItem'>
          <img src='' alt='img'></img>
          <div>Title</div>
        </div>
        <div className='productItem'>
          <img src='' alt='img'></img>
          <div>Title</div>
        </div><div className='productItem'>
          <img src='' alt='img'></img>
          <div>Title</div>
        </div>
        <div className='productItem'>
          <img src='' alt='img'></img>
          <div>Title</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App;
