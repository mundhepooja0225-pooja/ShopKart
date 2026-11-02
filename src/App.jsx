import './App.css'
import Layout from './Components/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './Components/ThemeContext';
import { CartProvider } from './Components/CartContext';
import Contact from './pages/Contact';
import About from './pages/About';

function AppContent() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme}>
      
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    

    </div>
  )

}

function App() {
  return (
    <CartProvider>
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
    </CartProvider>  )
}

export default App