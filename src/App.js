import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/categories" component={Categories} ></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact} ></Route>

      </div>
    </BrowserRouter>

  );
}

export default App;
