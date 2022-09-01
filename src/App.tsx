import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Pages/Home/Home';
import { Actions } from './components/Pages/Actions/Actions';
import { Blog } from './components/Pages/Blog/Blog';
import { BonusPlus } from './components/Pages/BounusPlus/BonusPlus';
import { Credit } from './components/Pages/Credit/Credit';
import { Footer } from './components/Footer/Footer';
import { Product } from './components/Pages/Product/Product';
import { Cart } from './components/Pages/Cart/Cart';
function App() {
  return (
    <>
      <Header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/actions' element={<Actions />} />
          <Route path='blog/' element={<Product />} />
          <Route path='/bonus' element={<BonusPlus />} />
          <Route path='/credit' element={<Credit />} />
          {/* <Route path='/subcategories' element={<AllCategories />}/> */}
          {/* <Route path='/subcategories/:id' element={<Product />} /> */}
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Header>
      <Footer />
    </>
  )

}

export default App;
