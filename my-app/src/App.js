import logo from './logo.svg';
import './App.css';
import MyFristComponent from './components/MyFirstComponent';
import EventBinding, { name1, name2, name3 } from './components/EventBinding';
import DisplayData from './components/DisplayData';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FallBackPage from './components/FallBackPage';

import ProductList from './LiftingStateUP/ProductList';
import CartSummary from './LiftingStateUP/CartSummary';
import LifeCycleHooks from './LiftingStateUP/LifeCycleHooks';

function App() {
  const [cartCount, setCartCount] = useState(0);
  // console.log("cartCount----",cartCount)

  return(
    <>
    <LifeCycleHooks />
    {/* <ProductList setCartCount={setCartCount}/>
    <CartSummary cartCount={cartCount} /> */}
     </>
  )


  // return (
  //   // it enabless Routing
  //   <BrowserRouter>


  //     {/* <nav>
  //       <Link to="/">Home</Link>
  //       <br></br>
  //       <Link to="/home">Home</Link>
  //       <br></br>
  //       <Link to="/about">About</Link>
  //       <br></br>
  //       <Link to="/contact">contact</Link>
  //     </nav> */}

  //     <Routes>

  //       <Route path="/" element={<EventBinding />}></Route>
        
  //       <Route path="/products" element={<ProductList setCartCount={setCartCount}/>} ></Route>
  //       <Route path="/cart" element={<CartSummary cartCount={cartCount} />} ></Route>

        
  //       <Route path="/home" element={<Home />}></Route>
  //       <Route path="/about" element={<About />}></Route>
  //       <Route path="/contact" element={<Contact />}></Route>

  //       <Route path="*" element={<FallBackPage />}></Route>
  //     </Routes>

  //   </BrowserRouter>
  // )

  // return (
  //   <div className="App">



  //  {/* <DisplayData /> */}

  //   {/* <EventBinding /> */}
  //   {/* <h1>{name1}</h1>
  //   <h1>{name2}</h1>
  //   <h1>{name3}</h1> */}
  //   {/* <h1>This is App component</h1> */}
  //   {/* props - properties */}
  //   {/* <MyFristComponent name="My first component" role="admin" fruitsList={["Apple", "Banana", "Orange"]}/> */}
  //   {/* <MyFristComponent name="Second component" role="manager"/> */}
  //   {/* <MyFristComponent name="Thread component" role="developer"/> */}
  //   </div>
  // );
}

export default App;
