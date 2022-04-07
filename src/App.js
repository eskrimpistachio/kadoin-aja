import Main from "./components/Main.js";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from "./components/Product.js";
import Login from './components/Login.js';
import Signup from "./components/Signup.js";


function App() {

  return (
      <Router>
        <Routes>

          <Route exact path="/" element={<Login/>}/>

          <Route path="/signup" element={<Signup/>}/>
        
          <Route path="/main" element={<Main/>}/>

          <Route path="/product" element={<Product/>}/>

        </Routes>

      </Router>
  );
}

export default App;
