import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import "./App.css" ;
import Footer from "./components/Footer.js";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from "./components/Product.js";
import Login from './components/Login.js';
import Signup from "./components/Signup.js";

function App() {
  return (
    <Router>

      <Switch>
        <div>
        <Route exact path="/">
          <Login/>
        </Route>

        <Route exact path="/Signup.js">
          <Signup/>
        </Route>
      
        <Route path="/main">
          <Navbar/>
          <Main/>
          <Footer/>
        </Route>

        <Route path="/Product.js">
          <Navbar/>
          <Product/>
          <Footer/>
        </Route>
          
        </div>
      </Switch>

    </Router>
    
  );
}

export default App;
