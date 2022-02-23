import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import ProductList from './components/products/ProductList'
import Cart from './components/cart/Cart'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;
